import React from 'react';
import { IGetAxesScaleProps } from './getAxisScale';
import { IChartZoom } from 'types/services/models/metrics/metricsAppModel';
import {
  IAttributesRef,
  IBrushRef,
} from 'types/components/LineChart/LineChart';

export interface IDrawBrushProps extends IGetAxesScaleProps {
  index: number;
  plotBoxRef: React.MutableRefObject<>;
  plotNodeRef: React.MutableRefObject<>;
  brushRef: React.MutableRefObject<IBrushRef>;
  visBoxRef: React.MutableRefObject<>;
  axesRef: React.MutableRefObject<>;
  attributesRef: React.MutableRefObject<IAttributesRef>;
  linesRef: React.MutableRefObject<>;
  svgNodeRef: React.MutableRefObject<>;
  zoom?: IChartZoom;
  onZoomChange?: (zoom: Partial<IChartZoom>) => void;
}