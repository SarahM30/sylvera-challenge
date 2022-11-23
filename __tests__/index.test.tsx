import { render, screen } from '@testing-library/react'
import ProjectHome from '@/pages/index'

describe('ProjectHome', () => {
  it('renders a heading', () => {
    render(<ProjectHome />)

    const headingRole = screen.getByRole('heading', { level: 1 });
    expect(headingRole).toBeInTheDocument()

    const headingText = screen.getByText('Projects')
    expect(headingText).toBeInTheDocument()
  })

  // Skipping as this will change with dynamic routes
  it.skip('renders links for each project', () => {
    render(<ProjectHome />)

    const linkCardFoo = screen.getByTestId('linkCard - foo');
    expect(linkCardFoo).toHaveAttribute('href', '/foo');

    const linkCardBar = screen.getByTestId('linkCard - bar');
    expect(linkCardBar).toHaveAttribute('href', '/bar');

    const linkCardHello = screen.getByTestId('linkCard - hello');
    expect(linkCardHello).toHaveAttribute('href', '/hello');
  })
})
