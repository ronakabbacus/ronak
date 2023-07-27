import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";
import { saveAs } from "file-saver";

const App = () => {
  const [text, setText] = useState("");
  const qrCodeRef = useRef(null);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleDownload = () => {
    if (qrCodeRef.current) {
      // Set the desired width and height
      const width = 250;
      const height = 250;

      // Create a canvas element to resize the QR code
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;

      // Get the context of the canvas
      const ctx = canvas.getContext("2d");

      // Draw the QR code image onto the canvas with the desired size
      ctx.drawImage(qrCodeRef.current.firstChild, 0, 0, width, height);

      // Convert the canvas to a Blob and save as PNG
      canvas.toBlob(function (blob) {
        saveAs(blob, "qr_code.png");
      });
    }
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type="text" value={text} onChange={handleInputChange} placeholder="Enter text or URL" />
      </div>
      <div className="qrcode-section">
        {text && (
            <div>
            <div ref={qrCodeRef}>
                <QRCode value={text} size={250} />
            </div>
            </div>
        )}
      </div>
      <div>
        <button onClick={handleDownload}>Download QR Code</button>
      </div>
    </div>
  );
};

export default App;
