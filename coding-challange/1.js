var fnLihat = () => {
    // Penampung Input
    var jadiArray = []

    // ambil data input
    var inputNumber = document.getElementById("input").value

    // displit (dipisah) udah jadi array dan udah di simpan di array
    jadiArray = inputNumber.split("")

    var draw = ''

    // gambar per huruf
    var draw1 = `<td><pre>   </pre><pre>  |</pre><pre>  |</pre></td>`
    var draw2 = `<td><pre> _ </pre><pre> _|</pre><pre>|_ </pre></td>`
    var draw3 = `<td><pre> _ </pre><pre> _|</pre><pre> _|</pre></td>`
    var draw4 = `<td><pre>   </pre><pre>|_|</pre><pre>  |</pre></td>`
    var draw5 = `<td><pre> _ </pre><pre>|_ </pre><pre> _|</pre></td>`
    var draw6 = `<td><pre> _ </pre><pre>|_ </pre><pre>|_|</pre></td>`
    var draw7 = `<td><pre> _ </pre><pre>  |</pre><pre>  |</pre></td>`
    var draw8 = `<td><pre> _ </pre><pre>|_|</pre><pre>|_|</pre></td>`
    var draw9 = `<td><pre> _ </pre><pre>|_|</pre><pre> _|</pre></td>`
    var draw0 = `<td><pre> _ </pre><pre>| |</pre><pre>|_|</pre></td>`

    for (let index = 0; index < jadiArray.length; index++) {

        if (jadiArray[index] == "1") {
            draw += draw1
        } else if (jadiArray[index] == "2") {
            // masih belum jadi gambar nya
            draw += draw2
        } else if (jadiArray[index] == 3) {
            draw += draw3
        } else if (jadiArray[index] == 4) {
            draw += draw4
        } else if (jadiArray[index] == 5) {
            draw += draw5
        } else if (jadiArray[index] == 6) {
            draw += draw6
        } else if (jadiArray[index] == 7) {
            draw += draw7
        } else if (jadiArray[index] == 8) {
            draw += draw8
        } else if (jadiArray[index] == 9) {
            draw += draw9
        } else if (jadiArray[index] == 0) {
            draw += draw0
        }

    }

    console.log(jadiArray);

    // Dimasukkan ke penampung
    // arrNum.push(inputNumber)

    // if (inputNumber == 1) {
    //     var draw = `<pre>   </pre><pre>  |</pre><pre>  |<pre>`
    // } else if (inputNumber == 2) {
    //     var draw = `<pre> _ </pre><pre> _|</pre><pre>|_ </pre>`
    // }

    // cetak tampil ke hasil 
    document.getElementById('hasilTampil').innerHTML = draw
}