"use client";
import * as React from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import { defaultBreakpoints, getBreakpoint } from "./breakpoints";
import type { Breakpoint, BreakpointConfig } from "./breakpoints";
import { Toolbar } from "./components/Toolbar";
import { ScaleBar } from "./components/ScaleBar";
import { PreviewPanel } from "./components/PreviewPanel";

interface PreviewWrapperProps {
  children?: React.ReactNode;
  className?: string;
  breakpoints?: BreakpointConfig[];
}

export function PreviewWrapper({
  children,
  className,
  breakpoints = defaultBreakpoints,
}: PreviewWrapperProps) {
  const resizablePanelRef = React.useRef<ImperativePanelHandle>(null);
  const [width, setWidth] = React.useState<number>(0);
  const [maxWidth, setMaxWidth] = React.useState<number>(0);
  const panelContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (width > maxWidth) {
      setMaxWidth(width);
    }
  }, [width, maxWidth]);

  React.useEffect(() => {
    if (!panelContentRef.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setWidth(Math.round(width));
    });

    observer.observe(panelContentRef.current);
    return () => observer.disconnect();
  }, []);

  const availableBreakpoints = React.useMemo(() => {
    return breakpoints.map((breakpoint: Breakpoint) => {
      breakpoint.percentage = Math.ceil(
        (breakpoint.minWidthPx * 100) / maxWidth
      );
      if (breakpoint.percentage > 100) {
        breakpoint.percentage = 100;
        breakpoint.show = false;
      } else {
        breakpoint.show = true;
      }
      return breakpoint;
    });
  }, [maxWidth, breakpoints]);

  const currentBreakpoint = getBreakpoint(width, breakpoints);

  return (
    <div className="twp">
      <div className="rpr-grid rpr-w-full rpr-gap-4 rpr-p-8 rpr-bg-white dark:rpr-bg-gray-900 rpr-rounded-md rpr-text-gray-800">
        <Toolbar
          width={width}
          maxWidth={maxWidth}
          breakpointTitle={currentBreakpoint?.title}
          availableBreakpoints={availableBreakpoints}
          onBreakpointChange={(value) => {
            if (resizablePanelRef?.current) {
              resizablePanelRef.current.resize(parseInt(value));
            }
          }}
        />

        <ScaleBar
          maxWidth={maxWidth}
          currentBreakpoint={currentBreakpoint?.title}
          breakpoints={availableBreakpoints}
        />

        <PreviewPanel
          panelRef={resizablePanelRef}
          contentRef={panelContentRef}
          className={className}
        >
          {children}
        </PreviewPanel>
      </div>
    </div>
  );
}
