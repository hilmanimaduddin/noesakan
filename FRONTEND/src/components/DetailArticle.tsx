import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  useColorModeValue,
  Container,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";

interface BlogAuthorProps {
  date: Date;
  name: string;
}

const BlogAuthor = (props: BlogAuthorProps) => {
  console.log(props);

  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* ... (kode lainnya) */}
    </HStack>
  );
};

const Artikel = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Container
      maxW={"7xl"}
      p="12"
      backgroundImage={`linear-gradient(rgba(0, 100, 255, 0.5), rgba(255, 255, 255, 0.4))`}
    >
      <Box
        mt={10}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center" // Tambahkan ini untuk mengatur gambar dan teks ke tengah
      >
        <Box
          flex="1"
          width={{ base: "100%", md: "40%" }}
          marginRight={{ base: "0", md: "3%" }}
          marginBottom={{ base: "5%", md: "0" }}
          position="relative"
          alignItems="center"
        >
          <Box
            width="100%"
            borderRadius="xl"
            boxShadow="lg"
            borderWidth="1px"
            overflow="hidden"
            position="relative"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              borderRadius="lg"
              src={
                "https://images.unsplash.com/photo-1535443120147-89aef0b5327a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt="some good alt text"
              objectFit="cover"
              // Tambahkan properti width dan height di bawah ini untuk memperbesar gambar
              width="100%"
              height="300px"
            />
          </Box>
        </Box>
        <Box
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
          marginLeft={{ base: "0", md: "3%" }} // Tambahkan ini untuk memberi jarak dari gambar
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Manfaat Mengonsumsi Ikan
            </Text>
          </Heading>
          <Text fontStyle={"italic"} pt={3} color={"gray.700"}>
            Created:{" "}
            <strong color={useColorModeValue("gray.700", "gray.50")}>
              Noesaikan.id
            </strong>
          </Text>
          <Text textAlign={"justify"} pt={5}>
            Ikan telah lama menjadi bagian penting dari pola makan manusia di
            seluruh dunia. Selain rasanya yang lezat, ikan juga merupakan sumber
            nutrisi yang kaya dan memiliki banyak manfaat bagi kesehatan.
            Berikut adalah beberapa manfaat mengonsumsi ikan yang perlu Anda
            ketahui:
          </Text>
        </Box>
      </Box>
      {isDropdownOpen && (
        <Text pt={5} textAlign={"justify"} as="p">
          Sumber Protein Berkualitas Tinggi: Ikan adalah salah satu sumber
          protein terbaik yang dapat Anda tambahkan ke dalam diet Anda. Protein
          adalah zat yang sangat penting untuk pertumbuhan dan perbaikan
          jaringan tubuh, termasuk otot, kulit, dan rambut. Protein ikan mudah
          dicerna dan memiliki semua asam amino esensial yang diperlukan tubuh.
          Kaya akan Asam Lemak Omega-3: Ikan, terutama ikan berlemak seperti
          salmon, sarden, dan mackerel, merupakan sumber utama asam lemak
          omega-3. Asam lemak ini memiliki berbagai manfaat, termasuk mendukung
          kesehatan jantung, mengurangi peradangan, meningkatkan fungsi otak,
          dan bahkan dapat membantu mengurangi risiko penyakit Alzheimer.
          Menjaga Kesehatan Jantung: Kandungan omega-3 dalam ikan dapat membantu
          menurunkan kolesterol jahat (LDL) dalam darah, mengurangi tekanan
          darah, dan mengurangi risiko penyakit jantung koroner. Konsumsi ikan
          secara teratur dapat mendukung kesehatan kardiovaskular Anda.
          Meningkatkan Kesehatan Otak: Asam lemak omega-3, terutama DHA (asam
          dokosaheksaenoat), adalah komponen penting dalam perkembangan otak dan
          fungsi kognitif. Mengonsumsi ikan secara teratur dapat membantu
          meningkatkan daya ingat, konsentrasi, dan mencegah penurunan kognitif
          pada usia lanjut. Mendukung Kesehatan Mata: Asam lemak omega-3 juga
          berperan dalam menjaga kesehatan mata. Mereka dapat membantu mencegah
          penyakit mata seperti degenerasi makula, yang sering terjadi pada usia
          lanjut. Meningkatkan Kesehatan Kulit: Kandungan asam lemak omega-3
          dalam ikan dapat membantu menjaga kelembapan dan elastisitas kulit,
          serta mengurangi risiko masalah kulit seperti jerawat dan psoriasis.
          Sumber Mikronutrien Penting: Ikan juga mengandung berbagai vitamin dan
          mineral penting seperti vitamin D, vitamin B12, selenium, dan yodium.
          Vitamin D penting untuk kesehatan tulang dan sistem kekebalan tubuh,
          sementara vitamin B12 adalah nutrisi penting untuk sistem saraf.
          Menurunkan Risiko Penyakit Kronis: Mengonsumsi ikan secara teratur
          telah terkait dengan penurunan risiko penyakit kronis, termasuk
          diabetes tipe 2, obesitas, dan beberapa jenis kanker. Alternatif Sehat
          untuk Daging Merah: Menggantikan daging merah dengan ikan dalam diet
          Anda dapat membantu mengurangi risiko penyakit seperti penyakit
          jantung dan beberapa jenis kanker, karena ikan cenderung lebih rendah
          lemak jenuh. Mendukung Keseimbangan Hormon: Asam lemak omega-3 dalam
          ikan dapat membantu menjaga keseimbangan hormon dalam tubuh, yang
          dapat mengurangi gejala PMS pada wanita dan meningkatkan kesehatan
          reproduksi. Penting untuk dipahami bahwa manfaat mengonsumsi ikan
          tergantung pada jenis ikan yang Anda pilih dan cara memasaknya.
          Hindari menggoreng ikan dengan minyak berlebihan, dan lebih baik
          memilih metode masak yang lebih sehat seperti memanggang, merebus,
          atau mengukus. Selain itu, pastikan untuk memerhatikan sumber ikan
          Anda, karena ikan yang terkontaminasi dapat mengandung zat berbahaya
          seperti merkuri. Mengonsumsi ikan sebagai bagian dari pola makan yang
          seimbang dan sehat dapat memberikan banyak manfaat kesehatan jangka
          panjang. Oleh karena itu, pertimbangkan untuk menyertakan ikan dalam
          menu Anda secara teratur untuk mendukung kesehatan tubuh Anda.
        </Text>
      )}
      <Text
        color={"blue.700"}
        fontWeight={"bold"}
        fontStyle={"italic"}
        pt={3}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? "Tutup" : "Baca selengkapnya..."}
      </Text>
      <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
      <Divider marginTop="5" />
      <Box
        mt={10}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center" // Tambahkan ini untuk mengatur gambar dan teks ke tengah
      >
        <Box
          flex="1"
          width={{ base: "100%", md: "40%" }}
          marginRight={{ base: "0", md: "3%" }}
          marginBottom={{ base: "5%", md: "0" }}
          position="relative"
          alignItems="center"
        >
          <Box
            width="100%"
            borderRadius="xl"
            boxShadow="lg"
            borderWidth="1px"
            overflow="hidden"
            position="relative"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              borderRadius="lg"
              src={
                "https://images.unsplash.com/photo-1587391028604-b370121a40f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              }
              alt="some good alt text"
              objectFit="cover"
              // Tambahkan properti width dan height di bawah ini untuk memperbesar gambar
              width="100%"
              height="300px"
            />
          </Box>
        </Box>
        <Box
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
          marginLeft={{ base: "0", md: "3%" }} // Tambahkan ini untuk memberi jarak dari gambar
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              KKP Gelar Bulan Bakti Kelautan dan Perikanan.
            </Text>
          </Heading>
          <Text fontStyle={"italic"} pt={3} color={"gray.700"}>
            Created:{" "}
            <strong color={useColorModeValue("gray.700", "gray.50")}>
              Noesaikan.id
            </strong>
          </Text>
          <Text textAlign={"justify"} pt={5}>
            Jakarta - Kementerian Kelautan dan Perikanan (KKP) menggelar Bulan
            Bakti Kelautan dan Perikanan. Kegiatan ini digelar dalam rangka
            menyemarakkan hari ulang tahun (HUT) KKP ke-24.
          </Text>
        </Box>
      </Box>
      {isDropdownOpen && (
        <Text pt={5} textAlign={"justify"} as="p">
          Dikelilingi Laut Jawa, Selat Sunda dan Samudera Hindia, Banten
          menyimpan potensi sumber daya kelautan dan perikanan yang besar.
          Adapun data Produksi Perikanan Tangkap Tahun 2022 menunjukkan angka
          sebesar 67.759,28 ton dengan nilai produksi Rp 2,24 triliun.
          Sementara, produksi perikanan budidaya sebesar 111.599,30 ton dengan
          nilai produksi Rp 2,49 triliun. Untuk produksi udang vaname per
          hektare mencapai 4 ton, dan dalam satu tahun dua kali panen. Di bidang
          perikanan budidaya, peluang untuk pengembangan usaha perikanan
          budidaya air tawar, perairan pedalaman, air payau serta budidaya laut
          mencapai 27.562 hektare.
        </Text>
      )}
      <Text
        color={"blue.700"}
        fontWeight={"bold"}
        fontStyle={"italic"}
        pt={3}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? "Tutup" : "Baca selengkapnya..."}
      </Text>
      <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
      <Divider marginTop="5" />
      <Box
        mt={10}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center" // Tambahkan ini untuk mengatur gambar dan teks ke tengah
      >
        <Box
          flex="1"
          width={{ base: "100%", md: "40%" }}
          marginRight={{ base: "0", md: "3%" }}
          marginBottom={{ base: "5%", md: "0" }}
          position="relative"
          alignItems="center"
        >
          <Box
            width="100%"
            borderRadius="xl"
            boxShadow="lg"
            borderWidth="1px"
            overflow="hidden"
            position="relative"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              borderRadius="lg"
              src={
                "https://images.unsplash.com/photo-1487335414417-ac48b43a8cc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt="some good alt text"
              objectFit="cover"
              // Tambahkan properti width dan height di bawah ini untuk memperbesar gambar
              width="100%"
              height="300px"
            />
          </Box>
        </Box>
        <Box
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", md: "0" }}
          marginLeft={{ base: "0", md: "3%" }} // Tambahkan ini untuk memberi jarak dari gambar
        >
          <Heading marginTop="1">
            <Text textDecoration="none" _hover={{ textDecoration: "none" }}>
              Nilai Produksi Rp 2,24 T, Laut Banten Jadi Tambang Investasi
              Perikanan
            </Text>
          </Heading>
          <Text fontStyle={"italic"} pt={3} color={"gray.700"}>
            Created:{" "}
            <strong color={useColorModeValue("gray.700", "gray.50")}>
              Noesaikan.id
            </strong>
          </Text>
          <Text textAlign={"justify"} pt={5}>
            Jakarta - Penjabat (Pj) Gubernur Provinsi Banten Al Muktabar
            mengatakan Banten memiliki kekayaan alam dan aksesibilitas yang
            menjadi modal dan daya tarik bagi investor.
          </Text>
        </Box>
      </Box>
      {isDropdownOpen && (
        <Text pt={5} textAlign={"justify"} as="p">
          "Kita ingin menghadirkan semangat berbeda, membangun jiwa korsa serta
          mendorong peningkatan kinerja para pegawai dan mendorong lahirnya
          inovasi-inovasi," ungkap Menteri Kelautan dan Perikanan Sakti Wahyu
          Trenggono dalam keterangan tertulis, Jumat (29/9/2023). Hal tersebut
          disampaikan Trenggono pada acara Kick Off Bulan Bakti Kelautan dan
          Perikanan di Kantor KKP, Jakarta Pusat, hari ini Baca artikel
          detikfinance, "KKP Gelar Bulan Bakti Kelautan dan Perikanan, Ini
          Rangkaian Kegiatannya"
        </Text>
      )}
      <Text
        color={"blue.700"}
        fontWeight={"bold"}
        fontStyle={"italic"}
        pt={3}
        onClick={toggleDropdown}
      >
        {isDropdownOpen ? "Tutup" : "Baca selengkapnya..."}
      </Text>
      <BlogAuthor name="John Doe" date={new Date("2021-04-06T19:01:27Z")} />
      <Divider marginTop="5" />
      <Box borderRadius="xl" mt="8" pb={10}>
        <Heading as="h2" fontSize="xl" mb="4">
          Rekomendasi Artikel untuk Dibaca:
        </Heading>
        <HStack spacing="8">
          {/* Artikel Pertama */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" // Ganti URL gambar sesuai artikel pertama
              alt="Gambar Artikel 1"
              objectFit="cover"
              h="150px"
              w={"100%"}
            />
            <Box p="4">
              <Text fontWeight="bold">Judul Artikel 1</Text>
              <Text fontSize="sm" mt="2">
                Deskripsi artikel pertama yang singkat.
              </Text>
              <Button mt="2" size="sm" colorScheme="blue">
                Baca Selengkapnya
              </Button>
            </Box>
          </Box>

          {/* Artikel Kedua */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src="https://images.unsplash.com/photo-1553603227-2358aabe821e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" // Ganti URL gambar sesuai artikel kedua
              alt="Gambar Artikel 2"
              objectFit="cover"
              h="150px"
              w={"100%"}
            />
            <Box p="4">
              <Text fontWeight="bold">Judul Artikel 2</Text>
              <Text fontSize="sm" mt="2">
                Deskripsi artikel kedua yang singkat.
              </Text>
              <Button mt="2" size="sm" colorScheme="blue">
                Baca Selengkapnya
              </Button>
            </Box>
          </Box>

          {/* Artikel Ketiga */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" // Ganti URL gambar sesuai artikel ketiga
              alt="Gambar Artikel 3"
              objectFit="cover"
              h="150px"
              w={"100%"}
            />
            <Box p="4">
              <Text fontWeight="bold">Judul Artikel 3</Text>
              <Text fontSize="sm" mt="2">
                Deskripsi artikel ketiga yang singkat.
              </Text>
              <Button mt="2" size="sm" colorScheme="blue">
                Baca Selengkapnya
              </Button>
            </Box>
          </Box>

          {/* Artikel Keempat */}
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
          >
            <Image
              src="https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80" // Ganti URL gambar sesuai artikel keempat
              alt="Gambar Artikel 4"
              objectFit="cover"
              h="150px"
              w={"100%"}
            />
            <Box p="4">
              <Text fontWeight="bold">Judul Artikel 4</Text>
              <Text fontSize="sm" mt="2">
                Deskripsi artikel keempat yang singkat.
              </Text>
              <Button mt="2" size="sm" colorScheme="blue">
                Baca Selengkapnya
              </Button>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Container>
  );
};

export default Artikel;
