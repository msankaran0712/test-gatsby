import * as React from 'react'
import { Link } from 'gatsby'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import { Form, FormCheck } from '@trimbleinc/modus-react-bootstrap';
import '../src/assets/css/main.scss';

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      
      <Form.Check
      custom
      ref={resolvedRef}
      {...rest}
    />
    )
  }
)

export const PostCard = (props) => (
  <div>
   <Form>
        <div key="custom-checkbox">
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
          />
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
            checked
          />
          <Form.Check
            custom
            type="checkbox"
            id="custom-checkbox"
            label="Checkbox"
            disabled
          />
        </div>
        <IndeterminateCheckbox id="test" indeterminate={true} />
      </Form>
    <br />
  </div>
)
