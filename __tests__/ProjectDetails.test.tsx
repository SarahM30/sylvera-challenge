import { render, screen } from '@testing-library/react'
import ProjectDetails from '../pages/ProjectDetails';

describe('ProjectDetails', () => {
  it('renders a heading', () => {
    render(<ProjectDetails />)

    const headingRole = screen.getByRole('heading', { level: 1 });
    expect(headingRole).toBeInTheDocument()

    const headingText = screen.getByText('Project Name')
    expect(headingText).toBeInTheDocument()
  })
})
