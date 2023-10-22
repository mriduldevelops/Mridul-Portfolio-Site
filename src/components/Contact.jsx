import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xoqorvoj");
  if (state.succeeded) {
    return <p>Thanks for contacting!</p>;
  }
  return (
    <div className="contact" id="contact">
      <h1>CONTACT ME</h1>
      <hr />
      <p>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </p>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            placeholder="Type your message here..."
            required
            autoComplete="off"
            rows={8}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
