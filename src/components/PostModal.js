import React from "react";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import Button from "./Button";
import TextField from "./TextField";
import { postRequest } from "./CallApi";

import { CKEditor } from "@ckeditor/ckeditor5-react";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    minWidth: "70vw",
    height: "90vh",
    overflow: "scroll",
    color: "black",
  },
};

export default class PostModal extends React.Component {
  state = {
    post: "",
    error: false,
    content: "",
  };

  Post = (e) => {
    const post = e.target.value;
    this.setState(() => ({ post }));
  };

  PostPost = () => {
    if (this.state.post) {
      let myPost = this.state.post;
      this.props.addPost(myPost);
      var d = new Date(),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      postRequest(
        "posts/submitpost",
        {
          email: window.localStorage.getItem("email"),
          password: window.localStorage.getItem("password"),
          content: this.state.post,
          dateOfPost: [year, month, day].join("-"),
        },
        (res) => {
          if (res.message == "SUCCESS") {
            <Redirect to="/home" />;
          } else {
            {
              window.alert(res);
              console.log(res);
            }
          }
        }
      );
    } else {
      this.setState(() => ({ error: true }));
    }
  };

  handleEditorState = (event, editor) => {
    const data = editor.getData();
    console.log(data);
    this.setState({ post: data });
  };

  render() {
    return (
      <Modal
        isOpen={!!this.props.openModal}
        onRequestClose={this.props.discardPost}
        contentLabel="Project Details"
        className="modal"
        ariaHideApp={false}
        style={modalStyles}
      >
        <div>
          Post Feed
          <Button
            text="X"
            type="close__button"
            onClick={this.props.discardPost}
          />
        </div>

        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          config={{
            ckfinder: {
              uploadUrl: "#",
            },
          }}
          onChange={this.handleEditorState}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
        {/* <TextField
          default=""
          label="Post"
          multiline
          FeildStyle={{
            width: 275,
            marginTop: 5,
            marginBottom: 5,
          }}
          inputprops={{
            style: {
              fontWeight: 300,
              color: "white",
              fontSize: 20,
            },
          }}
          LabelStyle={{
            style: {
              fontWeight: 500,
              color: "white",
              fontSize: 15,
            },
          }}
          Change={this.Post}
        />
        {this.state.error ? (
          <div>Please Enter some details. Post cannot be blank</div>
        ) : (
          ""
        )} */}
        <Button
          text="Post"
          type="button modal__button"
          onClick={this.PostPost}
        />
      </Modal>
    );
  }
}
