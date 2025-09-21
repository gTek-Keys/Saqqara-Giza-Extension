import { render } from '@testing-library/react'

describe('Simple Test', () => {
  it('should render without error', () => {
    const SimpleComponent = () => <div>Hello World</div>
    const { getByText } = render(<SimpleComponent />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})