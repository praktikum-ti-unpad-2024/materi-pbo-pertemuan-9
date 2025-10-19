---
layout: center
---


## Exercise - 2<kbd><span class='text-teal'>StudentGrades.java</span></kbd>

<div class="grid grid-cols-2 gap-1">

<div class="text-sm">

Buatlah program `StudentGrades.java` yang menggunakan `HashMap` untuk menyimpan nama siswa sebagai **key** dan nilai mereka sebagai **value**. Gunakan juga `ArrayList` untuk menampung nama siswa yang nilainya lebih dari 80.

- Input jumlah siswa yang ingin dimasukkan.
- Input nama siswa dan nilai mereka ke dalam HashMap.
- Menampilkan semua siswa dan nilai mereka.
- Menambahkan semua siswa dengan nilai lebih dari 80 ke dalam ArrayList, kemudian menampilkan nama-nama siswa tersebut.

</div>

<div class='grid grid-cols-[0.1fr_1.5fr] items-center text-sm gap-1'>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<span>Jumlah siswa, nama siswa, dan nilai berupa integer.</span>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col gap-0'>

```bash
4
Maikel 85
Jeprai 92
Finsen 70
Budiono Siregar 88
```

```bash
All Students and Grades:
Maikel - 85
Jeprai - 92
Finsen - 70
Budiono Siregar - 88

Students with grades above 80:
Maikel, Jeprai, Budiono Siregar
```

</div>
</div>
</div>

<div class="text-sm">
    
#### Catatan
- Gunakan `HashMap<String, Integer>` untuk menyimpan nama dan nilai.
- Gunakan `ArrayList<String>` untuk menyimpan nama siswa dengan nilai lebih dari 80.
- Pastikan program meminta input jumlah siswa sebelum memasukkan nama dan nilai.

</div>