// Filter toys in toystore by class 
// ---------------------------------------------------------------

(function () {

    var toysList = document.getElementsByClassName("col-3");

    var btnFilterAll = document.getElementById("filter-all");
    var btnFilterBerniukams = document.getElementById("filter-berniukams");
    var btnFilterMergaitems = document.getElementById("filter-mergaitems");
    var btnFiltelMinksti = document.getElementById("filter-minksti");
    var btnFiltelLavinamieji = document.getElementById("filter-lavinamieji");
    var btnFiltelKudikiams = document.getElementById("filter-kudikiams");

    btnFilterAll.addEventListener("click", filterAll);
    btnFilterBerniukams.addEventListener("click", filterBerniukams);
    btnFilterMergaitems.addEventListener("click", filterMergaitems);
    btnFiltelMinksti.addEventListener("click", filterMinksti);
    btnFiltelLavinamieji.addEventListener("click", filterLavinamieji);
    btnFiltelKudikiams.addEventListener("click", filterKudikiams);

    function filterAll() {
        for (i = 0; i < toysList.length; i++) {
            toysList.item(i).classList.remove("d-none");
        }
    }

    function filterBerniukams() {
        filterAll();
        for (i = 0; i < toysList.length; i++) {
            if (!toysList.item(i).classList.contains("berniukams")) {
                toysList.item(i).classList.add("d-none");
            }
        }
    }

    function filterMergaitems() {
        filterAll();
        for (i = 0; i < toysList.length; i++) {
            if (!toysList.item(i).classList.contains("mergaitems")) {
                toysList.item(i).classList.add("d-none");
            }
        }
    }

    function filterMinksti() {
        filterAll();
        for (i = 0; i < toysList.length; i++) {
            if (!toysList.item(i).classList.contains("minksti")) {
                toysList.item(i).classList.add("d-none");
            }
        }
    }

    function filterLavinamieji() {
        filterAll();
        for (i = 0; i < toysList.length; i++) {
            if (!toysList.item(i).classList.contains("lavinamieji")) {
                toysList.item(i).classList.add("d-none");
            }
        }
    }

    function filterKudikiams() {
        filterAll();
        for (i = 0; i < toysList.length; i++) {
            if (!toysList.item(i).classList.contains("kudikiams")) {
                toysList.item(i).classList.add("d-none");
            }
        }
    }
})();

$(document).ready(function () {
    $("#sn-input").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".col-3").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});