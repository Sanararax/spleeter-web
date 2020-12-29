/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  submit: () => void;
  hide: () => void;
}

/**
 * Component for the cancel dynamic mix modal.
 */
class CancelTaskModal extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  submit = (): void => {
    this.props.submit();
    this.props.hide();
  };

  render(): JSX.Element | null {
    return (
      <Modal show={this.props.show} onHide={this.props.hide}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm cancellation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            <div>Functionality disabled for demo purposes.</div>
          </Alert>
          <div>Are you sure you want to cancel this task?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" disabled>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default CancelTaskModal;
