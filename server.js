const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Konfigurasi middleware CORS untuk mengizinkan permintaan dari domain tertentu
const corsOptions = {
  origin: 'http://localhost:5173', // Menentukan origin yang diizinkan
  methods: 'POST', // Hanya izinkan metode POST
  optionsSuccessStatus: 204, // Set status OK untuk metode OPTIONS
};

// Gunakan middleware CORS dengan konfigurasi yang telah ditentukan
app.use(cors(corsOptions));

// Konfigurasi Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Lokasi penyimpanan file yang diunggah
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Nama file yang disimpan
  }
});

const upload = multer({ storage: storage });

// Endpoint untuk mengunggah file
app.post('/uploadfile', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Tidak ada file yang diunggah.' });
  }
  const fileName = req.file.filename;
  res.status(200).json({ message: 'File berhasil diunggah.', fileName: fileName });
});

// Menjalankan server
const server = app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});

// Endpoint untuk menghentikan server
afterAll((done) => {
  server.close(done);
});
