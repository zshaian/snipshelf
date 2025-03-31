import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// TODO: Fix the error, where accessing jest DOM matchers is not working.
describe('Home Component', () => {
  it('renders the title correctly', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'project demo route'
    );
  });

  it('renders all navigation links', () => {
    render(<Home />);

    const expectedLinks = [
      { text: 'Login Page', href: '/mvp/login' },
      { text: 'Snippets Page', href: '/mvp/snippets' },
      { text: 'Snippets Create Page', href: '/mvp/snippets/create' },
      { text: 'Snippets View page', href: '/mvp/snippets/view' },
      { text: 'Snippets Profile Page', href: '/mvp/snippets/profile' },
    ];

    expectedLinks.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('renders links in a list', () => {
    render(<Home />);
    const list = screen.getByRole('list');
    const listItems = screen.getAllByRole('listitem');
    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(5);
  });
});
