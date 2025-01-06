function Cooking() {
  return (
    <div>
      <h1>Cooking</h1>
      <p>Let's cook!</p>
       {/* // git commit --date='2024-12-27' -m 'Pag sure uy!' */}
       {/* // git commit --date='2025-01-01' -m 'Again' */}
    </div>
  );
}

export default Cooking;



// Cooking.js
// import React from 'react';
//
// const Cooking = () => {
//     const handleCommit = async () => {
//         const response = await fetch('http://localhost:5000/commit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ message: 'Pag sure uy!' }),
//         });
//
//         const data = await response.json();
//         if (data.success) {
//             alert('Commit successful!');
//         } else {
//             alert('Error with commit');
//         }
//     };
//
//     return (
//         <div>
//             <h1>Cooking</h1>
//             <p>Let's cook!</p>
//             <button onClick={handleCommit}>Make Commit</button>
//         </div>
//     );
// };
//
// export default Cooking;



// server.js
// const express = require('express');
// const { execSync } = require('child_process');
// const path = require('path');
//
// const app = express();
// const port = 5000;
//
// app.use(express.json());
//
// // Commit endpoint
// app.post('/commit', (req, res) => {
//     const { message } = req.body;
//
//     if (!message) {
//         return res.status(400).json({ success: false, message: 'Commit message is required' });
//     }
//
//     try {
//         // Execute the git commit command
//         execSync(`git commit --allow-empty -m "${message}"`, { cwd: path.join(__dirname, 'your-repo-directory') });
//         res.json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, message: 'Error creating commit' });
//     }
// });
//
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });

