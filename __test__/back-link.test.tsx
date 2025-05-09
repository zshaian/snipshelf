import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import BackLink from '@/components/back-link';

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('BackLink Component', () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      back: mockBack,
    });
  });

  it('renders the back button with correct text', () => {
    render(<BackLink />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('back');
  });

  it('calls router.back when clicked', () => {
    render(<BackLink />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('contains a left chevron icon', () => {
    render(<BackLink />);
    // Since FaChevronLeft is an SVG, we can check for its presence
    const svg = document.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
