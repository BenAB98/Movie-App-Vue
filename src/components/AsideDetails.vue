<template>
  <aside class="bg-white px-7 py-8 flex flex-col gap-y-5">
    <div class="flex">
      <a class="cursor-pointer pr-3">
        <svg
          fill="#000000"
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"
          />
        </svg>
      </a>
      <a class="cursor-pointer px-3 border-l border-l-grayWhite">
        <svg
          class=""
          width="30px"
          height="30px"
          viewBox="0 0 22 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>play_plus_focus [#959]</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-100.000000, -3959.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M51.424,3812.332 L56.068,3810.155 C56.835,3809.795 56.835,3808.704 56.068,3808.344 L51.424,3806.167 C50.761,3805.857 50,3806.341 50,3807.073 L50,3811.427 C50,3812.159 50.761,3812.643 51.424,3812.332 L51.424,3812.332 Z M62,3813 L64,3813 L64,3805 L62,3805 L62,3813 Z M64,3817 L64,3816 C64,3815.447 63.552,3815 63,3815 C62.447,3815 62,3815.447 62,3816 L62,3817 L61,3817 C60.447,3817 60,3817.447 60,3818 C60,3818.552 60.447,3819 61,3819 L62,3819 L62,3820 C62,3820.552 62.447,3821 63,3821 C63.552,3821 64,3820.552 64,3820 L64,3819 L65,3819 C65.552,3819 66,3818.552 66,3818 C66,3817.447 65.552,3817 65,3817 L64,3817 Z M62,3803 L64,3803 L64,3801 C64,3799.895 63.104,3799 62,3799 L60,3799 L60,3801 L61,3801 C61.552,3801 62,3801.447 62,3802 L62,3803 Z M44,3813 L46,3813 L46,3805 L44,3805 L44,3813 Z M46,3815 L44,3815 L44,3817 C44,3818.104 44.895,3819 46,3819 L48,3819 L48,3817 L47,3817 C46.447,3817 46,3816.552 46,3816 L46,3815 Z M44,3803 L46,3803 L46,3802 C46,3801.447 46.447,3801 47,3801 L48,3801 L48,3799 L46,3799 C44.895,3799 44,3799.895 44,3801 L44,3803 Z M50,3819 L58,3819 L58,3817 L50,3817 L50,3819 Z M50,3801 L58,3801 L58,3799 L50,3799 L50,3801 Z"
                  id="play_plus_focus-[#959]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
    <div class="flex flex-col gap-y-4">
      <div class="">
        <p class="font-medium">Status</p>
        <p class="font-thin">{{ status }}</p>
      </div>
      <div class="">
        <p class="font-medium">Original Language</p>
        <p class="font-thin">{{ language.toUpperCase() }}</p>
      </div>
      <div class="">
        <p class="font-medium">Budget</p>
        <p class="font-thin">${{ budget.toLocaleString() }}</p>
      </div>
      <div class="">
        <p class="font-medium">Revenue</p>
        <p class="font-thin">${{ revenue.toLocaleString() }}</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  status: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  budget: Number,
  revenue: Number
})
</script>
