export function createChart(element: HTMLElement) {
  const canvas = document.createElement('canvas') as HTMLCanvasElement;
  element.append(canvas);
  return canvas;
}