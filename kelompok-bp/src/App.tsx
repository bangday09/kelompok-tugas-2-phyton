import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  BarChart3,
  Save,
  X,
  Check,
} from "lucide-react";

const StudentCRUDApp = () => {
  const initialData = [
    {
      NIS: "2023001",
      Nama_Lengkap: "Andi Pratama",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2008-03-15",
      Kelas: "10 IPA",
      Alamat: "Jl. Merdeka No. 10",
      Nomor_Telepon_Wali: "81234567890",
      Nilai_Matematika: 85,
      Nilai_Bahasa_Indonesia: 90,
      Nilai_IPA: 88,
      Nilai_IPS: 80,
    },
    {
      NIS: "2023002",
      Nama_Lengkap: "Budi Santoso",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2008-07-20",
      Kelas: "10 IPS",
      Alamat: "Jl. Sudirman No. 25",
      Nomor_Telepon_Wali: "81345678901",
      Nilai_Matematika: 78,
      Nilai_Bahasa_Indonesia: 85,
      Nilai_IPA: 75,
      Nilai_IPS: 88,
    },
    {
      NIS: "2023003",
      Nama_Lengkap: "Citra Dewi",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2008-11-01",
      Kelas: "10 IPA",
      Alamat: "Jl. Pahlawan No. 3",
      Nomor_Telepon_Wali: "81456789012",
      Nilai_Matematika: 92,
      Nilai_Bahasa_Indonesia: 88,
      Nilai_IPA: 90,
      Nilai_IPS: 82,
    },
    {
      NIS: "2023004",
      Nama_Lengkap: "Dewi Sartika",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2009-01-05",
      Kelas: "10 IPS",
      Alamat: "Jl. Diponegoro No. 1",
      Nomor_Telepon_Wali: "81567890123",
      Nilai_Matematika: 80,
      Nilai_Bahasa_Indonesia: 92,
      Nilai_IPA: 79,
      Nilai_IPS: 90,
    },
    {
      NIS: "2023005",
      Nama_Lengkap: "Eko Susanto",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2008-04-22",
      Kelas: "10 IPA",
      Alamat: "Jl. Gatot Subroto No. 5",
      Nomor_Telepon_Wali: "81678901234",
      Nilai_Matematika: 70,
      Nilai_Bahasa_Indonesia: 75,
      Nilai_IPA: 72,
      Nilai_IPS: 65,
    },
    {
      NIS: "2023006",
      Nama_Lengkap: "Fani Lestari",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2008-09-10",
      Kelas: "11 IPA",
      Alamat: "Jl. Kebon Jeruk No. 12",
      Nomor_Telepon_Wali: "81789012345",
      Nilai_Matematika: 95,
      Nilai_Bahasa_Indonesia: 90,
      Nilai_IPA: 93,
      Nilai_IPS: 85,
    },
    {
      NIS: "2023007",
      Nama_Lengkap: "Gatot Subroto",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2007-12-03",
      Kelas: "11 IPS",
      Alamat: "Jl. Thamrin No. 2",
      Nomor_Telepon_Wali: "81890123456",
      Nilai_Matematika: 82,
      Nilai_Bahasa_Indonesia: 88,
      Nilai_IPA: 78,
      Nilai_IPS: 92,
    },
    {
      NIS: "2023008",
      Nama_Lengkap: "Hani Ramadhani",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2007-06-25",
      Kelas: "11 IPA",
      Alamat: "Jl. Asia Afrika No. 5",
      Nomor_Telepon_Wali: "81901234567",
      Nilai_Matematika: 88,
      Nilai_Bahasa_Indonesia: 85,
      Nilai_IPA: 87,
      Nilai_IPS: 80,
    },
    {
      NIS: "2023009",
      Nama_Lengkap: "Indra Wijaya",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2007-10-14",
      Kelas: "11 IPS",
      Alamat: "Jl. Pasetur No. 14",
      Nomor_Telepon_Wali: "81012345678",
      Nilai_Matematika: 75,
      Nilai_Bahasa_Indonesia: 80,
      Nilai_IPA: 70,
      Nilai_IPS: 85,
    },
    {
      NIS: "2023010",
      Nama_Lengkap: "Joko Santoso",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2007-02-28",
      Kelas: "11 IPA",
      Alamat: "Jl. Cihampelas No. 2",
      Nomor_Telepon_Wali: "81123456789",
      Nilai_Matematika: 90,
      Nilai_Bahasa_Indonesia: 92,
      Nilai_IPA: 89,
      Nilai_IPS: 83,
    },
    {
      NIS: "2023011",
      Nama_Lengkap: "Kiki Amalia",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2006-05-19",
      Kelas: "12 IPA",
      Alamat: "Jl. Setiabudi No. 30",
      Nomor_Telepon_Wali: "81223456789",
      Nilai_Matematika: 80,
      Nilai_Bahasa_Indonesia: 85,
      Nilai_IPA: 82,
      Nilai_IPS: 78,
    },
    {
      NIS: "2023012",
      Nama_Lengkap: "Lukman Hakim",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2006-08-07",
      Kelas: "12 IPS",
      Alamat: "Jl. Dago No. 1",
      Nomor_Telepon_Wali: "81334567890",
      Nilai_Matematika: 70,
      Nilai_Bahasa_Indonesia: 75,
      Nilai_IPA: 68,
      Nilai_IPS: 72,
    },
    {
      NIS: "2023013",
      Nama_Lengkap: "Mila Septiani",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2006-11-23",
      Kelas: "12 IPA",
      Alamat: "Jl. Buah Batu No. 9",
      Nomor_Telepon_Wali: "81445678901",
      Nilai_Matematika: 92,
      Nilai_Bahasa_Indonesia: 90,
      Nilai_IPA: 94,
      Nilai_IPS: 88,
    },
    {
      NIS: "2023014",
      Nama_Lengkap: "Niko Pratama",
      Jenis_Kelamin: "Laki-laki",
      Tanggal_Lahir: "2006-04-02",
      Kelas: "12 IPS",
      Alamat: "Jl. Pajajaran No. 16",
      Nomor_Telepon_Wali: "81556789012",
      Nilai_Matematika: 85,
      Nilai_Bahasa_Indonesia: 88,
      Nilai_IPA: 80,
      Nilai_IPS: 90,
    },
    {
      NIS: "2023015",
      Nama_Lengkap: "Putri Indah",
      Jenis_Kelamin: "Perempuan",
      Tanggal_Lahir: "2006-09-08",
      Kelas: "12 IPA",
      Alamat: "Jl. Ganesha No. 22",
      Nomor_Telepon_Wali: "81667890123",
      Nilai_Matematika: 78,
      Nilai_Bahasa_Indonesia: 80,
      Nilai_IPA: 75,
      Nilai_IPS: 72,
    },
  ];

  const [students, setStudents] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStudents, setFilteredStudents] = useState(initialData);

  useEffect(() => {
    const filtered = students.filter(
      (s) =>
        s.NIS.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.Nama_Lengkap.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchTerm, students]);

  const calculateStats = () => {
    const subjects = [
      "Nilai_Matematika",
      "Nilai_Bahasa_Indonesia",
      "Nilai_IPA",
      "Nilai_IPS",
    ];
    const stats = {};

    subjects.forEach((subject) => {
      const values = students.map((s) => parseInt(s[subject]));
      const max = Math.max(...values);
      const min = Math.min(...values);
      stats[subject] = {
        max: {
          value: max,
          student: students.find((s) => parseInt(s[subject]) === max),
        },
        min: {
          value: min,
          student: students.find((s) => parseInt(s[subject]) === min),
        },
      };
    });

    return stats;
  };

  const stats = calculateStats();

  return (
    <div style={{ padding: 20 }}>
      <h2>🔍 Search</h2>
      <input
        type="text"
        placeholder="Cari berdasarkan NIS atau Nama"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: 8, marginBottom: 20, width: "100%" }}
      />

      <h2>📋 Daftar Siswa</h2>
      <table border="1" cellPadding="8" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>NIS</th>
            <th>Nama</th>
            <th>Kelas</th>
            <th>MTK</th>
            <th>B.IND</th>
            <th>IPA</th>
            <th>IPS</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((siswa) => (
            <tr key={siswa.NIS}>
              <td>{siswa.NIS}</td>
              <td>{siswa.Nama_Lengkap}</td>
              <td>{siswa.Kelas}</td>
              <td>{siswa.Nilai_Matematika}</td>
              <td>{siswa.Nilai_Bahasa_Indonesia}</td>
              <td>{siswa.Nilai_IPA}</td>
              <td>{siswa.Nilai_IPS}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: 30 }}>📊 Statistik Nilai</h2>
      <ul>
        {Object.entries(stats).map(([subject, data]) => (
          <li key={subject}>
            <strong>{subject.replace("Nilai_", "")}</strong>: Tertinggi{" "}
            {data.max.value} ({data.max.student.Nama_Lengkap}) | Terendah{" "}
            {data.min.value} ({data.min.student.Nama_Lengkap})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentCRUDApp;
