import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'active', timestamp: new Date() });
});

// Contact Form Endpoint (Simulation)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    // Integration with n8n webhook or SendGrid would go here
    console.log('Received message from:', email);
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
