const loop = {
    handleClick: async (numb, stop) => {
        TODO: "replace name of dom obj"
        while (!stop) {
            if (numb % 2 == 1) {
                document.getElementById("textArea").innerHTML = numb + " numero dispari, eseguo moltiplicazione e addizione"
                numb = (numb * 3) + 1
                await new Promise(r => setTimeout(r, 2000));
                document.getElementById("textArea").innerHTML = "valore commutato: " + numb
            } else if (numb % 2 == 0) {
                document.getElementById("textArea").innerHTML = numb + " numero pari, eseguo divisione per due"
                numb = numb / 2
                await new Promise(r => setTimeout(r, 2000));
                document.getElementById("textArea").innerHTML = "valore commutato: " + numb
            }
            if (stop) {
                console.log("stop");
                return;
            }
        }
    },
    triggerStop: () => {
        loop.handleClick(null, true)
    }
}

export default loop;