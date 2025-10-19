---
layout: center
---

# Exercise - 1 <kbd><span class='text-teal'>Test.java</span></kbd>

<div class="grid grid-cols-2 gap-2">

<div class="text-sm">

Diberikan array integer, cari jumlah pasangan integer yang memiliki perbedaan sejumlah `k`

Misalnya, diberikan array {1, 7, 5, 9, 2, 12, 3} dan k = 2. <br>

Contoh: Untuk indeks pertama (integer: 1). Apakah ada integer dalam array tersebut yang memiliki perbedaan sebesar **2**? Jawabannya, ya terdapat (integer: 3), maka +1. Contoh pasangan lainnya:
- 3 dan 5
- 5 dan 7
- 7 dan 9

Maka jawaban akhirnya adalah **4** karena ada 4 pasangan integer yang memiliki perbedaan sebesar 2.

<br>

</div>

<div class='mt-6 grid grid-cols-[0.2fr_1.5fr] items-center text-sm gap-3'>
<br>

> Hint: Pakai collection non duplikasi

<span class='text-xs text-white font-extrabold uppercase text-yellow'>Input</span>
<div class='mt-4 flex flex-col gap-0'>

- baris pertama: int (panjang array)
- baris kedua : int (bilangan isi array dipisahkan spasi)
- baris ketiga : int (besar perbedaan nilai/ `k`)

```bash
7
1 7 5 9 2 12 3
2
```

</div>
<span class='text-xs text-white font-extrabold uppercase text-yellow'>Output</span>
<div class='flex flex-col mb-2 gap-0'>

Jumlah pasangan bilangan

```bash
4
```

</div>
</div>
</div>
