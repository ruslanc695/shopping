//balaca cihazlar ucun menyu acma butonunun islemleri >>>>>>>>
$(document).ready(function() {

    $("#header_menu_acma_butonu_alani").on("click", function() {

        $("#header_menu_acma_butonu_menu_mehdudlama_alani").slideToggle("slow");

    });

});

//balaca cihazlar ucun menyu acma butonunun islemleri <<<<<<<<<






//Tez-tez verilen suallar, iceriyi  goster / gizle  >>>>>>>>>>>>>

$.TTVS_iceriyini_goster = function(elementID) {
    var sualIDsi = elementID;
    var islenecekalan = "#" + sualIDsi;
    $(".Tam_sehife_cercive_alani_ici_verilen_suallar_sual_iceriyi_alani").slideUp();
    $(islenecekalan).parent().find(".Tam_sehife_cercive_alani_ici_verilen_suallar_sual_iceriyi_alani").slideToggle();
}

//Tez-tez verilen suallar, iceriyi  goster / gizle  <<<<<<<<<<<<<






//Alish-verish sebeti ve teslimat adresleri formu gonder  >>>>>>>>>>>>>

$.alishverish_sbeeti_form_gonder = function() {
    $("#alishverish_sebeti_formu").submit();
}

//Alish-verish sebeti ve teslimat adresleri formu gonder  <<<<<<<<<<<<<






//Alish-verish sebeti ve odeme sistemleri acma baglama  >>>>>>>>>>>>>

$.alishverish_sebeti_odeme_sehifesi_kredit_karti_sistemi_secildi = function() {
    $("#kredit_karti_ile_odeme").css("display", "block");
    $("#mobil_odeme_ile_odeme").css("display", "none");
    $("#bank_kocurmesi_ile_odeme").css("display", "none");
}


$.alishverish_sebeti_odeme_sehifesi_mobil_odeme_sistemi_secildi = function() {
    $("#mobil_odeme_ile_odeme").css("display", "block");
    $("#kredit_karti_ile_odeme").css("display", "none");
    $("#bank_kocurmesi_ile_odeme").css("display", "none");
}


$.alishverish_sebeti_odeme_sehifesi_bank_kocurme_sistemi_secildi = function() {
    $("#bank_kocurmesi_ile_odeme").css("display", "block");
    $("#mobil_odeme_ile_odeme").css("display", "none");
    $("#kredit_karti_ile_odeme").css("display", "none");
}

//Alish-verish sebeti ve odeme sistemleri acma baglama  <<<<<<<<<<<<<








//Mehsul etrafli kisi sehifesi ucun mehsul fotolari deyismek  >>>>>>>>>>>>>
$.mehsul_etrafli_sehifesi_ucun_resm_deyisdir = function(resm_deyeri) {
    var deyisecek_resm_senedi_yolu = "resimler/mehsullar/kisi/";
    var resm_yarat = deyisecek_resm_senedi_yolu + resm_deyeri;
    $("#boyuk_resm").attr("src", resm_yarat);
};
//Mehsul etrafli kisi sehifesi ucun mehsul fotolari deyismek <<<<<<<<<<<<<

//Mehsul etrafli qadin sehifesi ucun mehsul fotolari deyismek  >>>>>>>>>>>>>
$.mehsul_qadin_etrafli_sehifesi_ucun_resm_deyisdir = function(resm_deyeri) {
    var deyisecek_resm_senedi_yolu = "resimler/mehsullar/qadin/";
    var resm_yarat = deyisecek_resm_senedi_yolu + resm_deyeri;
    $("#boyuk_resm").attr("src", resm_yarat);
};
//Mehsul etrafli qadin sehifesi ucun mehsul fotolari deyismek <<<<<<<<<<<<<

//Mehsul etrafli usaq sehifesi ucun mehsul fotolari deyismek  >>>>>>>>>>>>>
$.mehsul_usaq_etrafli_sehifesi_ucun_resm_deyisdir = function(resm_deyeri) {
    var deyisecek_resm_senedi_yolu = "resimler/mehsullar/usaq/";
    var resm_yarat = deyisecek_resm_senedi_yolu + resm_deyeri;
    $("#boyuk_resm").attr("src", resm_yarat);
};
//Mehsul etrafli usaq sehifesi ucun mehsul fotolari deyismek <<<<<<<<<<<<<



//slide alani  >>>>>>>>>>>>>
$(function() {
    var slayd_elementi = $(".slayd_alani_qapsamasi");
    var slayd_list_yaratma_elementi = slayd_elementi.find(".slayd_alani_resmleri");
    var slayd_list_uzunlugu = slayd_list_yaratma_elementi.find(".slayd_resmi").length;
    var slayt_ucun_dokument_genisliyi = slayd_elementi.outerWidth();
    var toplam_genislik = slayd_list_uzunlugu * slayt_ucun_dokument_genisliyi;
    var resm_sirasi = 0;
    var surusecek_alan = 0;
    slayd_list_yaratma_elementi.find(".slayd_resmi").width(slayt_ucun_dokument_genisliyi).end().width(toplam_genislik);

    $(window).resize(function() {
        slayd_elementi = $(".slayd_alani_qapsamasi");
        slayd_list_yaratma_elementi = slayd_elementi.find(".slayd_alani_resmleri");
        slayd_list_uzunlugu = slayd_list_yaratma_elementi.find(".slayd_resmi").length;
        slayt_ucun_dokument_genisliyi = slayd_elementi.outerWidth();
        toplam_genislik = slayd_list_uzunlugu * slayt_ucun_dokument_genisliyi;
        slayd_list_yaratma_elementi.find(".slayd_resmi").width(slayt_ucun_dokument_genisliyi).end().width(toplam_genislik).css("margin-left", "-" + (resm_sirasi * slayt_ucun_dokument_genisliyi) + "px");

    });

    $.avtomatik_deyisdir = function() {
        if (resm_sirasi < slayd_list_uzunlugu - 1) {
            resm_sirasi++;
            surusecek_alan = "-" + (resm_sirasi * slayt_ucun_dokument_genisliyi) + "px";
        } else {
            resm_sirasi = 0;
            surusecek_alan = 0;
        }
        slayd_list_yaratma_elementi.stop().animate({
            marginLeft: surusecek_alan
        }, 500, function() {
            slayd_elementi = $(".slayd_alani_qapsamasi");
            slayd_list_yaratma_elementi = slayd_elementi.find(".slayd_alani_resmleri");
            slayd_list_uzunlugu = slayd_list_yaratma_elementi.find(".slayd_resmi").length;
            slayt_ucun_dokument_genisliyi = slayd_elementi.outerWidth();
            toplam_genislik = slayd_list_uzunlugu * slayt_ucun_dokument_genisliyi;
            slayd_list_yaratma_elementi.find(".slayd_resmi").width(slayt_ucun_dokument_genisliyi).end().width(toplam_genislik).css("margin-left", "-" + (resm_sirasi * slayt_ucun_dokument_genisliyi) + "px");
        });
    }
    var slayt_baslat = setInterval("$.avtomatik_deyisdir()", 3500);
});
//slide alani <<<<<<<<<<<<<