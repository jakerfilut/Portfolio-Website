import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bj3gaur",
        "template_8eys7hd",
        e.target,
        "user_PtFiizgmhTSz6pOR5Izek"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div
      id="contact"
      className="container border"
      style={{
        marginTop: "50px",
        width: "75%",
        marginBottom: "50px",
        backgroundColor: "#1c2237",
        color: "white",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 0px 0px 0px" }}
        onSubmit={sendEmail}
      >
        <label style={{ marginTop: "10px" }}>Name</label>
        <input
          type="test"
          name="name"
          className="form-control"
          placeholder="Your Name"
        />
        <label style={{ marginTop: "10px" }}>Email</label>
        <input
          type="email"
          name="user_email"
          className="form-control"
          placeholder="Your Email"
        />
        <label style={{ marginTop: "10px" }}>Message</label>
        <textarea
          name="message"
          rows="4"
          className="form-control"
          placeholder="Write Your Message Here"
        />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px", marginBottom: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;
