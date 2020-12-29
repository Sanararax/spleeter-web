/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';

interface Props {
  show: boolean;
  submit: () => void;
  hide: () => void;
}

/**
 * Component for the delete dynamic mix modal.
 */
class DeleteTaskModal extends React.Component<Props, {}> {
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
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="danger">
            <div>Functionality disabled for demo purposes.</div>
          </Alert>
          <div>Are you sure you want to delete this mix?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled variant="danger">
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default DeleteTaskModal;
