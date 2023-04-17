/*
	Big Picture by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $header = $("#header"),
    $all = $body.add($header);

  // Breakpoints.
  breakpoints({
    xxlarge: ["1681px", "1920px"],
    xlarge: ["1281px", "1680px"],
    large: ["1001px", "1280px"],
    medium: ["737px", "1000px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });

  // Play initial animations on page load.
  $window.on("load", function () {
    setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Touch mode.
  if (browser.mobile) $body.addClass("is-touch");
  else {
    breakpoints.on("<=small", function () {
      $body.addClass("is-touch");
    });

    breakpoints.on(">small", function () {
      $body.removeClass("is-touch");
    });
  }

  // Fix: IE flexbox fix.
  if (browser.name == "ie") {
    var $main = $(".main.fullscreen"),
      IEResizeTimeout;

    $window
      .on("resize.ie-flexbox-fix", function () {
        clearTimeout(IEResizeTimeout);

        IEResizeTimeout = setTimeout(function () {
          var wh = $window.height();

          $main.each(function () {
            var $this = $(this);

            $this.css("height", "");

            if ($this.height() <= wh) $this.css("height", wh - 50 + "px");
          });
        });
      })
      .triggerHandler("resize.ie-flexbox-fix");
  }

  //Gallery.
  $window.on("load", function () {
    var $gallery = $(".email-template");

    $gallery.poptrox({
      baseZIndex: 10001,
      useBodyOverflow: false,
      usePopupEasyClose: false,
      overlayColor: "#1f2328",
      overlayOpacity: 0.65,
      usePopupDefaultStyling: false,
      usePopupCaption: true,
      popupLoaderText: "",
      windowMargin: 50,
      usePopupNav: true,
    });

    // Hack: Adjust margins when 'small' activates.
    breakpoints.on(">small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 50;
      });
    });

    breakpoints.on("<=small", function () {
      $gallery.each(function () {
        $(this)[0]._poptrox.windowMargin = 5;
      });
    });
  });

  // Section transitions.
  if (browser.canUse("transition")) {
    var on = function () {
      // Galleries.
      $(".gallery").scrollex({
        top: "30vh",
        bottom: "30vh",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Generic sections.
      $(".main.style1").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      $(".main.style2").scrollex({
        mode: "middle",
        delay: 100,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });

      // Contact.
      $("#contact").scrollex({
        top: "50%",
        delay: 50,
        initialize: function () {
          $(this).addClass("inactive");
        },
        terminate: function () {
          $(this).removeClass("inactive");
        },
        enter: function () {
          $(this).removeClass("inactive");
        },
        leave: function () {
          $(this).addClass("inactive");
        },
      });
    };

    var off = function () {
      // Galleries.
      $(".gallery").unscrollex();

      // Generic sections.
      $(".main.style1").unscrollex();

      $(".main.style2").unscrollex();

      // Contact.
      $("#contact").unscrollex();
    };

    breakpoints.on("<=small", off);
    breakpoints.on(">small", on);
  }

  // Events.
  var resizeTimeout, resizeScrollTimeout;

  $window
    .on("resize", function () {
      // Disable animations/transitions.
      $body.addClass("is-resizing");

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(function () {
        // Update scrolly links.
        $('a[href^="#"]').scrolly({
          speed: 1500,
          offset: $header.outerHeight() - 1,
        });

        // Re-enable animations/transitions.
        setTimeout(function () {
          $body.removeClass("is-resizing");
          $window.trigger("scroll");
        }, 0);
      }, 100);
    })
    .on("load", function () {
      $window.trigger("resize");
    });
})(jQuery);

//Modal
const overlay = document.querySelector(".overlay");

const btnCloseDigi = document.querySelector(".close-digi");
const btnCloseBTi = document.querySelector(".close-bti");
const btnCloseTraffic = document.querySelector(".close-traffic-sign");
const btnCloseNews = document.querySelector(".close-news");
const btnClosePred = document.querySelector(".close-pred");
const btnCloseAir = document.querySelector(".close-air");

const btnBTiOpen = document.querySelector(".bti-open");
const btnDigiOpen = document.querySelector(".digicor-open");
const btnTrafficOpen = document.querySelector(".traffic-sign-open");
const btnNewsOpen = document.querySelector(".news-open");
const btnPredOpen = document.querySelector(".pred-open");
const btnAirOpen = document.querySelector(".air-open");

const digimodal = document.querySelector(".digicor");
const btimodal = document.querySelector(".bti");
const trafficmodal = document.querySelector(".traffic-sign");
const newsmodal = document.querySelector(".news");
const predmodal = document.querySelector(".pred");
const airmodal = document.querySelector(".air");

const closeModal = function () {
  console.log(`close module funciton`);
  btimodal.classList.add("hidden");
  digimodal.classList.add("hidden");
  trafficmodal.classList.add("hidden");
  newsmodal.classList.add("hidden");
  predmodal.classList.add("hidden");
  airmodal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnBTiOpen.addEventListener("click", function () {
  btimodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnDigiOpen.addEventListener("click", function () {
  digimodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnTrafficOpen.addEventListener("click", function () {
  trafficmodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnNewsOpen.addEventListener("click", function () {
  newsmodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnPredOpen.addEventListener("click", function () {
  predmodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnAirOpen.addEventListener("click", function () {
  airmodal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseDigi.addEventListener("click", closeModal);

btnCloseBTi.addEventListener("click", closeModal);

btnCloseTraffic.addEventListener("click", closeModal);

btnCloseNews.addEventListener("click", closeModal);

btnClosePred.addEventListener("click", closeModal);

btnCloseAir.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  console.log(e);
  //Contains class
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Show/Hide more content
const showWebDevButton = document.querySelector(".show-more-web");
const showDataButton = document.querySelector(".show-more-data");
const webContent = document.querySelector(".webdev");
const dataContent = document.querySelector(".dataproj");
let showWebDev = false;
let showDataProj = false;

showWebDevButton.addEventListener("click", () => {
  console.log(showWebDev);
  if (!showWebDev) {
    // contentContainer.style.csstext = `display: -moz-flex;
    // display: -webkit-flex;
    // display: -ms-flex;
    // display: flex;
    // -moz-flex-wrap: wrap;
    // -webkit-flex-wrap: wrap;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;
    // width: 45em;
    // max-width: 100%;
    // margin: 0 auto 2em auto;`;
    // console.log(`1`);
    webContent.classList.remove("hidden");
    showWebDev = true;
  } else {
    // contentContainer.style.csstext = `display: none;
    // -moz-flex-wrap: wrap;
    // -webkit-flex-wrap: wrap;
    // -ms-flex-wrap: wrap;
    // flex-wrap: wrap;
    // width: 45em;
    // max-width: 100%;
    // margin: 0 auto 2em auto;`;
    // console.log(`2`);
    webContent.classList.add("hidden");
    showWebDev = false;
  }
});

showDataButton.addEventListener("click", () => {
  console.log(showDataProj);
  if (!showDataProj) {
    dataContent.classList.remove("hidden");
    showDataProj = true;
  } else {
    dataContent.classList.add("hidden");
    showDataProj = false;
  }
});

const btnShowLessWeb = document.querySelector("#show-less-web");
const btnShowLessData = document.querySelector("#show-less-data");

btnShowLessWeb.addEventListener("click", () => {
  webContent.classList.add("hidden");
  showWebDev = false;
});

btnShowLessData.addEventListener("click", () => {
  dataContent.classList.add("hidden");
  showDataProj = false;
});
