import { createChart } from '.';

describe('createChart', () => {
  it('create canvas and append it to a given element', async () => {
    const element = document.createElement('div');
    document.body.append(element);

    createChart(element);

    const canvas = element.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });
});
