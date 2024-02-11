window.onload = () => {
    console.log('page has loaded!')
    // alert("page has loaded!")

    // gets single element, IDs only exist once
    document.getElementById("important-content").innerHTML = 'this text has been changed with javascript'

    // WITH CLASS
    // gets multiple elements that returns array
    // [0] = first element of red-paragraph
    // [1] = second element of red-paragraph

    // let redParagraphs = document.getElementsByClassName("red-paragraph")
    // console.log(redParagraphs)

    // modify [0]
    // redParagraphs[0].innerHTML = "this red paragraph has changed it\'s text with javascript"

    // WITH ID
    let firstRedParagraph = document.getElementById('change-red')
    firstRedParagraph.innerHTML = "this red paragraph has changed it\'s text with javascript"
}