(function () {
  const BATCH_SIZE = 8;

  const catalogData = [
    {
      id: 1,
      image: "assets/images/image_1.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "9-08-2016",
      postedDateISO: "2016-08-09",
      likesCurrent: 128,
      commentsCurrent: 31,
      likesPosted: 67,
      commentsPosted: 22,
      uploadDateLabel: "11-04-2016",
      uploadDateISO: "2016-04-11",
    },
    {
      id: 2,
      image: "assets/images/image_2.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "8-08-2016",
      postedDateISO: "2016-08-08",
      likesCurrent: 142,
      commentsCurrent: 28,
      likesPosted: 54,
      commentsPosted: 19,
      uploadDateLabel: "10-04-2016",
      uploadDateISO: "2016-04-10",
    },
    {
      id: 3,
      image: "assets/images/image_3.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "7-08-2016",
      postedDateISO: "2016-08-07",
      likesCurrent: 95,
      commentsCurrent: 24,
      likesPosted: 41,
      commentsPosted: 15,
      uploadDateLabel: "09-04-2016",
      uploadDateISO: "2016-04-09",
    },
    {
      id: 4,
      image: "assets/images/image_4.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "6-08-2016",
      postedDateISO: "2016-08-06",
      likesCurrent: 201,
      commentsCurrent: 45,
      likesPosted: 88,
      commentsPosted: 33,
      uploadDateLabel: "08-04-2016",
      uploadDateISO: "2016-04-08",
    },
    {
      id: 5,
      image: "assets/images/image_5.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "5-08-2016",
      postedDateISO: "2016-08-05",
      likesCurrent: 76,
      commentsCurrent: 18,
      likesPosted: 32,
      commentsPosted: 11,
      uploadDateLabel: "07-04-2016",
      uploadDateISO: "2016-04-07",
    },
    {
      id: 6,
      image: "assets/images/image_6.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "4-08-2016",
      postedDateISO: "2016-08-04",
      likesCurrent: 163,
      commentsCurrent: 37,
      likesPosted: 71,
      commentsPosted: 26,
      uploadDateLabel: "06-04-2016",
      uploadDateISO: "2016-04-06",
    },
    {
      id: 7,
      image: "assets/images/image_7.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "3-08-2016",
      postedDateISO: "2016-08-03",
      likesCurrent: 118,
      commentsCurrent: 29,
      likesPosted: 59,
      commentsPosted: 21,
      uploadDateLabel: "05-04-2016",
      uploadDateISO: "2016-04-05",
    },
    {
      id: 8,
      image: "assets/images/image_8.png",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "2-08-2016",
      postedDateISO: "2016-08-02",
      likesCurrent: 89,
      commentsCurrent: 22,
      likesPosted: 44,
      commentsPosted: 17,
      uploadDateLabel: "04-04-2016",
      uploadDateISO: "2016-04-04",
    },
    {
      id: 9,
      image: "https://picsum.photos/seed/monblan-09/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "1-08-2016",
      postedDateISO: "2016-08-01",
      likesCurrent: 174,
      commentsCurrent: 41,
      likesPosted: 82,
      commentsPosted: 30,
      uploadDateLabel: "03-04-2016",
      uploadDateISO: "2016-04-03",
    },
    {
      id: 10,
      image: "https://picsum.photos/seed/monblan-10/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "31-07-2016",
      postedDateISO: "2016-07-31",
      likesCurrent: 132,
      commentsCurrent: 33,
      likesPosted: 63,
      commentsPosted: 24,
      uploadDateLabel: "02-04-2016",
      uploadDateISO: "2016-04-02",
    },
    {
      id: 11,
      image: "https://picsum.photos/seed/monblan-11/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "30-07-2016",
      postedDateISO: "2016-07-30",
      likesCurrent: 98,
      commentsCurrent: 25,
      likesPosted: 47,
      commentsPosted: 18,
      uploadDateLabel: "01-04-2016",
      uploadDateISO: "2016-04-01",
    },
    {
      id: 12,
      image: "https://picsum.photos/seed/monblan-12/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "29-07-2016",
      postedDateISO: "2016-07-29",
      likesCurrent: 156,
      commentsCurrent: 36,
      likesPosted: 74,
      commentsPosted: 27,
      uploadDateLabel: "31-03-2016",
      uploadDateISO: "2016-03-31",
    },
    {
      id: 13,
      image: "https://picsum.photos/seed/monblan-13/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "28-07-2016",
      postedDateISO: "2016-07-28",
      likesCurrent: 111,
      commentsCurrent: 27,
      likesPosted: 52,
      commentsPosted: 20,
      uploadDateLabel: "30-03-2016",
      uploadDateISO: "2016-03-30",
    },
    {
      id: 14,
      image: "https://picsum.photos/seed/monblan-14/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "27-07-2016",
      postedDateISO: "2016-07-27",
      likesCurrent: 187,
      commentsCurrent: 43,
      likesPosted: 91,
      commentsPosted: 34,
      uploadDateLabel: "29-03-2016",
      uploadDateISO: "2016-03-29",
    },
    {
      id: 15,
      image: "https://picsum.photos/seed/monblan-15/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "26-07-2016",
      postedDateISO: "2016-07-26",
      likesCurrent: 84,
      commentsCurrent: 20,
      likesPosted: 38,
      commentsPosted: 14,
      uploadDateLabel: "28-03-2016",
      uploadDateISO: "2016-03-28",
    },
    {
      id: 16,
      image: "https://picsum.photos/seed/monblan-16/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "25-07-2016",
      postedDateISO: "2016-07-25",
      likesCurrent: 145,
      commentsCurrent: 34,
      likesPosted: 68,
      commentsPosted: 25,
      uploadDateLabel: "27-03-2016",
      uploadDateISO: "2016-03-27",
    },
    {
      id: 17,
      image: "https://picsum.photos/seed/monblan-17/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "24-07-2016",
      postedDateISO: "2016-07-24",
      likesCurrent: 102,
      commentsCurrent: 26,
      likesPosted: 49,
      commentsPosted: 19,
      uploadDateLabel: "26-03-2016",
      uploadDateISO: "2016-03-26",
    },
    {
      id: 18,
      image: "https://picsum.photos/seed/monblan-18/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "23-07-2016",
      postedDateISO: "2016-07-23",
      likesCurrent: 168,
      commentsCurrent: 39,
      likesPosted: 79,
      commentsPosted: 29,
      uploadDateLabel: "25-03-2016",
      uploadDateISO: "2016-03-25",
    },
    {
      id: 19,
      image: "https://picsum.photos/seed/monblan-19/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "22-07-2016",
      postedDateISO: "2016-07-22",
      likesCurrent: 93,
      commentsCurrent: 23,
      likesPosted: 43,
      commentsPosted: 16,
      uploadDateLabel: "24-03-2016",
      uploadDateISO: "2016-03-24",
    },
    {
      id: 20,
      image: "https://picsum.photos/seed/monblan-20/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "21-07-2016",
      postedDateISO: "2016-07-21",
      likesCurrent: 121,
      commentsCurrent: 30,
      likesPosted: 57,
      commentsPosted: 22,
      uploadDateLabel: "23-03-2016",
      uploadDateISO: "2016-03-23",
    },
    {
      id: 21,
      image: "https://picsum.photos/seed/monblan-21/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "20-07-2016",
      postedDateISO: "2016-07-20",
      likesCurrent: 195,
      commentsCurrent: 44,
      likesPosted: 96,
      commentsPosted: 35,
      uploadDateLabel: "22-03-2016",
      uploadDateISO: "2016-03-22",
    },
    {
      id: 22,
      image: "https://picsum.photos/seed/monblan-22/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "19-07-2016",
      postedDateISO: "2016-07-19",
      likesCurrent: 107,
      commentsCurrent: 28,
      likesPosted: 51,
      commentsPosted: 20,
      uploadDateLabel: "21-03-2016",
      uploadDateISO: "2016-03-21",
    },
    {
      id: 23,
      image: "https://picsum.photos/seed/monblan-23/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "18-07-2016",
      postedDateISO: "2016-07-18",
      likesCurrent: 138,
      commentsCurrent: 32,
      likesPosted: 65,
      commentsPosted: 23,
      uploadDateLabel: "20-03-2016",
      uploadDateISO: "2016-03-20",
    },
    {
      id: 24,
      image: "https://picsum.photos/seed/monblan-24/406/406",
      currentDateLabel: "Today",
      currentDateISO: "2016-08-09",
      postedDateLabel: "17-07-2016",
      postedDateISO: "2016-07-17",
      likesCurrent: 152,
      commentsCurrent: 35,
      likesPosted: 72,
      commentsPosted: 26,
      uploadDateLabel: "19-03-2016",
      uploadDateISO: "2016-03-19",
    },
  ];

  const catalogEl = document.getElementById("catalog");
  const loadMoreBtn = document.querySelector(".button--load-more");
  const viewButtons = document.querySelectorAll(".view-switcher__btn");

  let visibleCount = BATCH_SIZE;

  function formatPickerDate(date) {
    if (!date) {
      return "";
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return day + "_" + month + "_" + year;
  }

  const navArrowPrev =
    '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>' +
    "</svg>";

  const navArrowNext =
    '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path fill="currentColor" d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>' +
    "</svg>";

  const datepickerOptions = {
    locale: globalThis.en,
    dateFormat: formatPickerDate,
    autoClose: true,
    offset: 8,
    classes: "datepicker",
    navTitles: {
      days: "MMMM yyyy",
      months: "yyyy",
      years: "yyyy1 - yyyy2",
    },
    prevHtml: navArrowPrev,
    nextHtml: navArrowNext,
  };

  const DATE_FIELD_BREAKPOINT = 568;

  function getDatepickerPosition() {
    return window.innerWidth > DATE_FIELD_BREAKPOINT ? "bottom left" : "bottom right";
  }

  const dateFromInput = document.getElementById("date-from");
  const dateToInput = document.getElementById("date-to");

  const dateFromPicker = new AirDatepicker(dateFromInput, {
    ...datepickerOptions,
    container: dateFromInput.closest(".date-field"),
    position: getDatepickerPosition(),
  });

  const dateToPicker = new AirDatepicker(dateToInput, {
    ...datepickerOptions,
    container: dateToInput.closest(".date-field"),
    position: getDatepickerPosition(),
  });

  window.addEventListener("resize", function () {
    const position = getDatepickerPosition();
    dateFromPicker.update({ position: position });
    dateToPicker.update({ position: position });
  });

  const datepickers = {
    "date-from": dateFromPicker,
    "date-to": dateToPicker,
  };

  function createCardMarkup(item) {
    return (
      '<li class="card">' +
      '<img class="card__image" src="' +
      item.image +
      '" alt="" width="203" height="203" loading="lazy">' +
      '<div class="card__body">' +
      '<div class="card__row card__row--dates">' +
      '<time class="card__date card__date--current" datetime="' +
      item.currentDateISO +
      '">' +
      item.currentDateLabel +
      "</time>" +
      '<time class="card__date card__date--posted" datetime="' +
      item.postedDateISO +
      '">' +
      item.postedDateLabel +
      "</time>" +
      "</div>" +
      '<div class="card__row card__row--stats">' +
      '<div class="card__stats card__stats--current">' +
      '<span class="card__stat">' +
      '<span class="card__icon card__icon--heart" aria-hidden="true"></span>' +
      '<span class="card__count">' +
      item.likesCurrent +
      "</span>" +
      "</span>" +
      '<span class="card__stat">' +
      '<span class="card__icon card__icon--comment" aria-hidden="true"></span>' +
      '<span class="card__count">' +
      item.commentsCurrent +
      "</span>" +
      "</span>" +
      "</div>" +
      '<div class="card__stats card__stats--posted">' +
      '<span class="card__stat">' +
      '<span class="card__icon card__icon--heart" aria-hidden="true"></span>' +
      '<span class="card__count">' +
      item.likesPosted +
      "</span>" +
      "</span>" +
      '<span class="card__stat">' +
      '<span class="card__icon card__icon--comment" aria-hidden="true"></span>' +
      '<span class="card__count">' +
      item.commentsPosted +
      "</span>" +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="card__row card__row--footer">' +
      '<span class="card__label">Image upload</span>' +
      '<time class="card__date card__date--upload" datetime="' +
      item.uploadDateISO +
      '">' +
      item.uploadDateLabel +
      "</time>" +
      "</div>" +
      "</div>" +
      "</li>"
    );
  }

  function renderCatalog() {
    const items = catalogData.slice(0, visibleCount);
    catalogEl.innerHTML = items.map(createCardMarkup).join("");
    updateLoadMoreButton();
  }

  function updateLoadMoreButton() {
    if (visibleCount >= catalogData.length) {
      loadMoreBtn.classList.add("button--load-more--hidden");
    } else {
      loadMoreBtn.classList.remove("button--load-more--hidden");
    }
  }

  function setView(view) {
    catalogEl.classList.remove("catalog--tiles", "catalog--rows");
    catalogEl.classList.add("catalog--" + view);

    viewButtons.forEach(function (btn) {
      const isActive = btn.dataset.view === view;
      btn.classList.toggle("view-switcher__btn--active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
  }

  function initViewSwitcher() {
    viewButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setView(btn.dataset.view);
      });
    });
  }

  function initLoadMore() {
    loadMoreBtn.addEventListener("click", function () {
      visibleCount = Math.min(visibleCount + BATCH_SIZE, catalogData.length);
      renderCatalog();
    });
  }

  function initDateFields() {
    document.querySelectorAll(".date-field__clear").forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = btn.dataset.target;
        datepickers[targetId].clear();
      });
    });

    document.querySelectorAll(".date-field__trigger").forEach(function (btn) {
      btn.addEventListener("click", function (event) {
        event.preventDefault();
        const input = document.getElementById(btn.dataset.target);
        input.focus();
        datepickers[btn.dataset.target].show();
      });
    });
  }

  renderCatalog();
  initViewSwitcher();
  initLoadMore();
  initDateFields();
})();
