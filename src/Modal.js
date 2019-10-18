import React, { Component } from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import SpeechS from "./Docs/SpeechServices_OH.md";

class ModalModalExample extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }
  componentWillMount() {
    fetch(SpeechS)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (
      <Modal
        size={'large'}
        trigger={
          <Button as="a" color="grey" inverted size='tiny' >
            Documentacion MarkDown
          </Button>
        }
      >
        <Modal.Header>
          <Modal.Content>
            <p>
              <Modal.Description>
                <ReactMarkdown source={markdown} escapeHtml={false} />
              </Modal.Description>
            </p>
          </Modal.Content>
        </Modal.Header>
      </Modal>
    );
  }
}
export default ModalModalExample;
