import React, { useState } from 'react';

function Useform() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    console.log("Submit");
    setIsPending(false);
  };

  function FormFields() {
    return (
      <>
        <input type="text" id="Name" placeholder="Enter the Name" />
        <br /><br />
        <input type="password" id="password" placeholder="Enter the Password" />
        <br /><br />
        <button disabled={isPending} type="submit">
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Use Form</h1>
      <form onSubmit={handleSubmit}>
        <FormFields />
      </form>
    </>
  );
}

export default Useform;
