var fnRenderList = () => {

}

// ketika button lihat di klik
var fnLihat = () => {

    var radioValue = document.querySelector("input[name=radio]:checked")

    var kanan = false
    var kiri = false
    for (i = 0; i < radioValue.length; i++) {
        if (radioValue[i].checked) {
            kiri = true
        } else if (radioValue[i].checked) {
            kanan = true
        }
    }

    var inputPutar = document.getElementById("input").value
}