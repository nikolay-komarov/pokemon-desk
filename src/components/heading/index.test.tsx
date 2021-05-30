/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Heading, { HeadingSize } from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading size={HeadingSize.h1} />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading size={HeadingSize.h1}>Testing...</Heading>, container);
    });

    expect(container?.textContent).toBe('Testing...');
  });

  it('render with props h3', () => {
    act(() => {
      render(<Heading size={HeadingSize.h3}>Testing...</Heading>, container);
    });

    expect(container?.querySelector('h3')).not.toBeNull();
  });

  it('render with props className', () => {
    act(() => {
      render(
        <Heading size={HeadingSize.h3} className="test">
          Testing...
        </Heading>,
        container,
      );
    });

    expect(container?.querySelector('.test')).not.toBeNull();
  });
});
