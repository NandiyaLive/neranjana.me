const contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="grid">
          <div className="contact-form">
            <form action="https://formspree.io/xyynwlly" method="POST">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="subject">Subject</label>
              <input type="subject" id="subject" name="subject" />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required></textarea>
              <button type="submit" className="btn mt-20 text-500 is-text-14">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-img">
            <svg viewBox="0 0 1058.333 705.556" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M867.205 317.81c-49.367-50.856-117.09-83.502-187.624-90.445-70.535-6.942-143.323 11.868-201.662 52.12a375.49 375.49 0 0 0-4.124 2.896c24.67-68.59-4.272-138.924-89.761-154.104-40.55-7.2-86.793-2.501-124.224 15.046-47.947 22.479-88.109 68.153-105.254 118.191-16.23 47.371-12.182 113.432 34.553 141.8 10.21 6.194 21.391 10.523 32.983 13.45-18.232 8.425-34.89 19.16-48.638 34.34-22.35 24.68-33.239 58.028-36.427 91.168-3.188 33.144 2.629 67.317 16.89 101.265h784.567c8.315-109.414 10.188-241.808-71.279-325.727"
                fill="#f1f2f5"
              />
              <path
                d="M100.571 626.766c8.225-.889 16.896-2.166 25.167-2.01-2.56-12.806-3.427-25.506-2.293-38.517 13.966-1.725 28.241 2.258 39.452 10.763.302-15.589 4.127-32.039 11.74-45.646 15.233 9.204 26.288 24.268 33.322 40.62 7.034 16.347 11.265 33.936 13.74 51.561H110.616c-5.777-3.672-9.045-10.001-10.045-16.77"
                fill="#f0c36a"
              />
              <path
                d="M162.897 597.002a55.08 55.08 0 0 0 1.076 5.444 68.53 68.53 0 0 0 1.524 5.323 67.85 67.85 0 0 0 4.285 10.164 63.49 63.49 0 0 0 2.768 4.77 64.354 64.354 0 0 0 3.191 4.5c2.268 2.904 4.825 5.578 7.58 8.069a45.958 45.958 0 0 1-8.17-7.589l-.891-1.083c-.302-.356-.567-.74-.852-1.11-.574-.742-1.093-1.518-1.63-2.283a60.153 60.153 0 0 1-2.858-4.823 61.846 61.846 0 0 1-2.336-5.094 55.187 55.187 0 0 1-1.81-5.299 52.992 52.992 0 0 1-1.267-5.447c-.314-1.834-.565-3.683-.61-5.542m-37.159 27.753a49.784 49.784 0 0 0 2.544 4.788c.934 1.53 1.948 3.009 3.097 4.37.56.692 1.17 1.341 1.803 1.965.622.635 1.306 1.203 2 1.76 1.402 1.101 2.956 2.001 4.626 2.745-1.793-.352-3.527-1.097-5.068-2.127-1.555-1.016-2.918-2.307-4.11-3.718a26.978 26.978 0 0 1-1.642-2.233 25.49 25.49 0 0 1-1.37-2.4c-.82-1.64-1.496-3.361-1.88-5.15"
                fill="#1d2238"
              />
              <path
                d="M545.158 643.467c-3.51-25.481 7.013-51.418 23.477-71.18 16.468-19.763 38.41-34.156 60.788-46.842 5.686 23.668 2.864 49.689-8.17 71.384 3.506-7.171 10.52-12.135 18.016-14.88 7.5-2.74 15.547-3.527 23.495-4.29 5.22 14.828 2.713 32.382-7.843 44.034 13.632-3.986 28.84-4.755 42.743-1.838 1.277 7.797 1.065 15.844-1.016 23.467l-151.49.145"
                fill="#f0c36a"
              />
              <path
                d="M621.252 596.83c-.73 2.497-1.728 4.91-2.8 7.284a77.534 77.534 0 0 1-3.624 6.936c-1.305 2.258-2.755 4.438-4.275 6.562a92.673 92.673 0 0 1-4.886 6.138 91.448 91.448 0 0 1-5.476 5.62c-.984.864-1.94 1.76-2.96 2.579-.504.416-.998.846-1.516 1.245l-1.563 1.185c-.515.402-1.062.762-1.591 1.143-.54.367-1.058.766-1.62 1.104-1.104.699-2.194 1.415-3.333 2.05-2.254 1.316-4.607 2.445-6.996 3.464 4.491-2.617 8.78-5.5 12.76-8.763a98.029 98.029 0 0 0 5.761-5.122 101.716 101.716 0 0 0 5.316-5.577c1.7-1.927 3.32-3.923 4.869-5.977 1.57-2.039 3.02-4.162 4.438-6.314a110.328 110.328 0 0 0 3.99-6.629 88.325 88.325 0 0 0 3.506-6.929m33.669 24.864c-1.435 2.149-3.171 4.078-5.009 5.885a51.94 51.94 0 0 1-5.898 5.016l-.78.572-.8.546c-.54.357-1.066.73-1.617 1.073-1.107.667-2.197 1.358-3.358 1.933-2.265 1.238-4.664 2.23-7.116 3.016 2.173-1.4 4.364-2.684 6.47-4.106 1.07-.688 2.103-1.422 3.154-2.127.522-.36 1.03-.734 1.549-1.1l.776-.544.758-.572c2.05-1.488 4.043-3.051 6.019-4.646a204.909 204.909 0 0 0 5.852-4.946m-88.219-112.247H207.147v-107.36h359.555v107.36"
                fill="#1d2238"
              />
              <path d="M546.164 523.088H228.266V205.19h317.898v317.898" fill="#fff" />
              <path d="M228.619 522.736H545.81V205.542H228.619Zm317.897.705H227.913V204.837h318.603V523.44" fill="#d2d6e1" />
              <path
                d="M580.644 634.89a14.038 14.038 0 0 0 1.076-5.4V416.154c0-11.151-12.368-17.854-21.71-11.772l-133.94 87.21-38.858-36.018-38.853 36.018-133.94-87.21c-9.344-6.082-21.711.621-21.711 11.772V629.49c0 1.915.384 3.736 1.076 5.4l.466.999c2.328 4.54 7.051 7.648 12.504 7.648h360.918c5.454 0 10.178-3.108 12.506-7.648l.466-.998"
                fill="#d2d6e1"
              />
              <path
                d="M192.708 631.384c15.975-14.908 32.044-29.714 48.108-44.528l24.14-22.168 24.18-22.123c16.111-14.756 32.298-29.432 48.45-44.146l48.568-44.02 1.058-.96 1.062.96 48.57 44.016 24.24 22.06 24.211 22.087 24.18 22.122 24.14 22.172c16.062 14.81 32.131 29.616 48.105 44.528-16.443-14.39-32.79-28.885-49.145-43.377l-24.49-21.781-24.444-21.83-24.416-21.865-24.388-21.893-48.683-43.893h2.12l-48.684 43.889c-16.267 14.587-32.498 29.214-48.804 43.759l-24.446 21.83-24.488 21.78c-16.353 14.492-32.701 28.988-49.144 43.381"
                fill="#1d2238"
              />
              <path
                d="M259.028 309.767c21.448-.68 42.897-1.037 64.345-1.277l8.043-.095 8.043-.064 16.088-.116 32.17-.088 32.173.084 16.087.117 8.043.06 8.044.099c21.448.24 42.897.596 64.346 1.28-21.449.681-42.898 1.04-64.346 1.28l-8.044.096-8.043.06-16.087.116-32.173.089-32.17-.092-16.088-.117-8.043-.063-8.043-.095c-21.448-.24-42.897-.597-64.345-1.274m0 27.185c21.448-.68 42.897-1.033 64.345-1.277l8.043-.095 8.043-.064 16.088-.113 32.17-.091 32.173.084 16.087.117 8.043.063 8.044.096c21.448.24 42.897.596 64.346 1.28-21.449.685-42.898 1.04-64.346 1.28l-8.044.096-8.043.064-16.087.116-32.173.085-32.17-.092-16.088-.113-8.043-.064-8.043-.095c-21.448-.243-42.897-.596-64.345-1.277m0 27.185c21.448-.677 42.897-1.033 64.345-1.273l8.043-.096 8.043-.063 16.088-.116 32.17-.092 32.173.088 16.087.116 8.043.06 8.044.096c21.448.24 42.897.6 64.346 1.28-21.449.685-42.898 1.04-64.346 1.28l-8.044.1-8.043.06-16.087.116-32.173.085-32.17-.089-16.088-.116-8.043-.063-8.043-.096c-21.448-.24-42.897-.596-64.345-1.277m0 27.189c21.448-.681 42.897-1.037 64.345-1.277l8.043-.095 8.043-.064 16.088-.116 32.17-.089 32.173.085 16.087.116 8.043.06 8.044.1c21.448.24 42.897.595 64.346 1.28-21.449.68-42.898 1.04-64.346 1.28l-8.044.096-8.043.06-16.087.116-32.173.088-32.17-.091-16.088-.117-8.043-.063-8.043-.096c-21.448-.24-42.897-.596-64.345-1.273m0 27.184c21.448-.68 42.897-1.033 64.345-1.276l8.043-.095 8.043-.064 16.088-.113 32.17-.092 32.173.085 16.087.117 8.043.063 8.044.095c21.448.24 42.897.596 64.346 1.28-21.449.685-42.898 1.042-64.346 1.281l-8.044.096-8.043.063-16.087.117-32.173.084-32.17-.091-16.088-.113-8.043-.064-8.043-.095c-21.448-.243-42.897-.596-64.345-1.277"
                fill="#d2d6e1"
              />
              <path
                d="m214.508 404.245 16.316 10.216 16.3 10.238 32.527 20.591 8.142 5.13 8.157 5.108a622.917 622.917 0 0 1 16.138 10.488l7.959 5.412c2.635 1.834 5.287 3.637 7.903 5.5 5.252 3.69 10.469 7.436 15.589 11.33l-.18.276c-5.633-3.105-11.169-6.36-16.67-9.67-2.76-1.64-5.483-3.337-8.224-5.006l-8.17-5.087a622.33 622.33 0 0 1-16.12-10.516l-7.972-5.394-7.986-5.37-31.989-21.417-15.957-10.766-15.942-10.788.18-.275m223.937 79.29c9.758-7.165 19.696-14.058 29.694-20.856 9.987-6.816 20.066-13.494 30.19-20.095 10.132-6.597 20.317-13.109 30.59-19.487 10.262-6.396 20.584-12.69 31.09-18.715-9.758 7.172-19.692 14.065-29.693 20.863-9.987 6.816-20.063 13.494-30.194 20.091-10.132 6.59-20.317 13.106-30.59 19.48-10.262 6.396-20.588 12.693-31.087 18.719m-157.73-212.658c-.186-1.115-.595-1.98-1.226-2.59-.631-.61-1.445-.917-2.442-.917-1.688 0-3.134.854-4.336 2.561-1.203 1.708-1.805 3.772-1.805 6.192 0 1.301.303 2.303.908 3.009.604.705 1.458 1.058 2.561 1.058 1.196 0 2.283-.444 3.26-1.326.977-.886 1.638-2.032 1.983-3.44zm-1.176 8.456c-.731 1.154-1.582 2.004-2.552 2.54-.97.54-2.14.808-3.509.808-2.02 0-3.565-.575-4.635-1.725-1.07-1.15-1.605-2.808-1.605-4.974 0-3.098.917-5.722 2.751-7.874 1.834-2.152 4.047-3.232 6.639-3.232 1.183 0 2.173.23 2.97.688.798.459 1.456 1.175 1.974 2.145l1.097-2.134h3.07l-2.95 11.684a3.935 3.935 0 0 0-.04.24c-.08.37-.12.617-.12.737 0 .504.176.91.528 1.213.352.307.814.459 1.386.459.678 0 1.392-.201 2.143-.607.75-.405 1.452-.966 2.103-1.683a10.394 10.394 0 0 0 2.193-3.541c.505-1.348.758-2.78.758-4.294 0-3.362-1.243-6.096-3.728-8.195-2.486-2.099-5.735-3.15-9.749-3.15-1.834 0-3.535.208-5.104.617a14.598 14.598 0 0 0-4.286 1.877c-2.406 1.5-4.26 3.433-5.562 5.8-1.303 2.367-1.954 4.992-1.954 7.874 0 4.148 1.392 7.465 4.176 9.948 2.785 2.487 6.496 3.729 11.135 3.729 2.206 0 4.356-.325 6.45-.977a21.222 21.222 0 0 0 5.81-2.83l1.337 1.973c-1.98 1.502-4.097 2.631-6.35 3.39-2.253.758-4.615 1.136-7.087 1.136-2.552 0-4.885-.318-6.998-.956-2.114-.639-3.98-1.584-5.602-2.833-2.06-1.567-3.599-3.397-4.616-5.493-1.016-2.092-1.525-4.47-1.525-7.126 0-2.194.346-4.276 1.037-6.251a17.968 17.968 0 0 1 3.05-5.433c1.954-2.378 4.303-4.184 7.048-5.422 2.744-1.235 5.798-1.852 9.16-1.852 2.207 0 4.3.3 6.28.906 1.98.604 3.675 1.45 5.084 2.54 1.754 1.359 3.07 2.921 3.948 4.696.877 1.774 1.315 3.771 1.315 5.99 0 2.155-.432 4.163-1.296 6.022a13.047 13.047 0 0 1-3.688 4.724 10.12 10.12 0 0 1-2.99 1.665 9.964 9.964 0 0 1-3.35.568c-1.408 0-2.452-.268-3.13-.808-.677-.536-1.016-1.373-1.016-2.501v-.078"
                fill="#1d2238"
              />
              <path d="M499.77 289.281H323.442c-8.83 0-15.99-7.161-15.99-15.991s7.16-15.988 15.99-15.988H499.77c8.83 0 15.991 7.158 15.991 15.988 0 8.83-7.161 15.991-15.991 15.991" fill="#f1f2f5" />
              <path d="m772.792 184.863-1.179 17.342-7.338 107.844c-22.937-1.88-44.619-2.19-33.34-46.171l19.392-77.622 22.465-1.393" fill="#eb9481" />
              <path d="m768.809 184.46-1.49 3.066c-1.985 4.092-6.705 6.403-11.175 5.62a3.047 3.047 0 0 1-.497-.134l-3.292-1.171 2.928-14.415 13.526 7.034" fill="#1d2238" />
              <path d="m772.428 611.907-39.116 17.35a15.784 15.784 0 0 0-9.377 14.824l85.277-.727-4.738-31.722-32.046.275" fill="#f0c36a" />
              <path
                d="M809.166 637.695c-7.023.452-14.047.713-21.071.914-3.51.116-7.024.166-10.534.247l-10.537.141-10.538.042c-3.514-.024-7.027-.01-10.54-.07-7.028-.078-14.052-.222-21.083-.554 7.024-.455 14.044-.72 21.072-.917 3.51-.12 7.023-.166 10.533-.247l10.538-.141 10.537-.04c3.514.022 7.028.011 10.541.071 7.024.078 14.052.223 21.082.554M798.82 625.15c.038 4.276-3.401 7.772-7.677 7.811a7.746 7.746 0 0 1-7.81-7.68 7.74 7.74 0 0 1 7.676-7.81 7.743 7.743 0 0 1 7.81 7.68m-60.236.984c1.002-.424 1.972-.434 2.892-.293a6.803 6.803 0 0 1 2.583 1.005 6.503 6.503 0 0 1 1.993 2.025c.504.826.815 1.824.688 2.882l-.162.096c-.25-.332-.459-.692-.748-.992-.134-.155-.254-.324-.402-.469l-.434-.44a12.768 12.768 0 0 0-1.962-1.518 16.718 16.718 0 0 0-2.173-1.206 14.94 14.94 0 0 0-1.15-.483 12.528 12.528 0 0 0-1.171-.424l.046-.183m9.983-4.335c1.002-.424 1.972-.435 2.893-.294.92.156 1.796.498 2.582 1.006a6.48 6.48 0 0 1 1.99 2.021c.505.83.818 1.828.691 2.886l-.162.095c-.25-.332-.458-.691-.748-.991-.134-.155-.254-.325-.402-.47l-.434-.44a12.768 12.768 0 0 0-1.961-1.517 16.718 16.718 0 0 0-2.173-1.207 14.94 14.94 0 0 0-1.15-.483 11.918 11.918 0 0 0-1.172-.423l.046-.184m9.24-3.937c1.001-.423 1.972-.43 2.892-.293a6.862 6.862 0 0 1 2.583 1.01 6.41 6.41 0 0 1 1.99 2.02c.504.826.818 1.825.69 2.886l-.162.096c-.25-.336-.458-.692-.747-.992-.134-.158-.258-.324-.403-.472l-.434-.441a12.746 12.746 0 0 0-1.961-1.514 16.74 16.74 0 0 0-3.323-1.693 12.902 12.902 0 0 0-1.171-.423l.046-.184m2.416-267.472-1.358 261.28h52.645l12.763-265.267-64.05 3.986"
                fill="#1d2238"
              />
              <path
                d="m892.958 584.786-39.973-124.93L839.17 335.75l-62.61 14.076 19.021 122.753 48.066 130.644 49.311-18.436M749.625 153.56s-9.08-9.824-1.235-22.718c7.85-12.894 30.575-11.723 33.14-5.578l-31.905 28.297"
                fill="#1d2238"
              />
              <path
                d="M775.543 188.733h-.003c-14.313 0-25.915-11.603-25.915-25.915v-9.257c0-14.313 11.602-25.915 25.915-25.915h.003c14.312 0 25.915 11.602 25.915 25.915v9.257c0 14.312-11.603 25.915-25.915 25.915"
                fill="#eb9481"
              />
              <path d="m809.424 200.459-27.877 4.466-7.835-48.902 27.873-4.47 7.839 48.906" fill="#eb9481" />
              <path
                d="M766.477 151.236c.211.677.356 1.358.487 2.035.074.339.12.678.172 1.02.053.339.11.677.142 1.016l.116 1.02c.035.338.05.677.074 1.019l.07 1.016.036 1.02.039 1.153-1.203.007c-.43.004-.865.014-1.298.01l-.321-.003h-.127l-.078.004a1.49 1.49 0 0 0-.303.06c-.191.07-.378.19-.53.356-.148.17-.24.381-.282.624a1.31 1.31 0 0 0 .085.755c.06.12.12.25.208.37.092.114.201.22.328.315.13.08.268.17.427.229.141.056.38.092.596.138.43.102.864.204 1.295.342l.02.003c.033.01.05.046.04.081-.007.029-.032.043-.06.046l-1.295.018c-.219 0-.43.01-.66-.004a2.518 2.518 0 0 1-.656-.162 2.33 2.33 0 0 1-1.429-2.13 2.345 2.345 0 0 1 1.422-2.156c.212-.085.434-.141.66-.17.233-.02.444-.014.66-.017l1.298.003-.124.127.018-4.074c.003-1.358.021-2.713.042-4.071 0-.035.028-.064.064-.064a.06.06 0 0 1 .06.046l.007.018m12.683-3.489c-.191.663-1.853.769-3.712.236-1.863-.532-3.217-1.5-3.027-2.162.187-.664 1.852-.773 3.711-.24 1.863.533 3.218 1.503 3.027 2.166m-16.689-2.385c.162.67-1.232 1.584-3.112 2.04-1.884.454-3.539.281-3.7-.389-.163-.67 1.23-1.584 3.11-2.039 1.88-.455 3.539-.282 3.701.388m12.997 8.418a1.591 1.591 0 1 1-3.183-.001 1.591 1.591 0 0 1 3.183 0m-13.847.001a1.59 1.59 0 0 1-1.587 1.59 1.591 1.591 0 0 1 0-3.182 1.59 1.59 0 0 1 1.587 1.591m17.279 34.735s9.172-1.478 13.021-5.352c0 0-1.249 7.37-12.164 10.704l-.857-5.352m-9.116-60.226s7.666 23.551 28.54 27.153l8.696-4.209s2.346-40.992-37.236-22.944"
                fill="#1d2238"
              />
              <path d="M808.64 155.441c0 3.524-2.31 6.385-5.157 6.385-2.85 0-5.16-2.86-5.16-6.385 0-3.528 2.31-6.385 5.16-6.385 2.847 0 5.158 2.857 5.158 6.385" fill="#eb9481" />
              <path
                d="M800.41 153.635c.046-.632.346-1.25.84-1.76a3.3 3.3 0 0 1 .907-.61c.349-.156.74-.227 1.136-.24.8-.036 1.601.288 2.205.772.306.243.56.532.786.836.212.31.392.642.526.984.127.346.222.702.272 1.062a5.927 5.927 0 0 1 .045.804c-.003.085-.007.19-.02.31a2.127 2.127 0 0 1-.269.862 1.571 1.571 0 0 1-.977.737c-.36.084-.617.053-.836.01a3.251 3.251 0 0 1-.55-.18c-.639-.26-1.101-.606-1.58-.924-.47-.335-.9-.667-1.437-.924l-.028-.014c-.032-.014-.046-.05-.028-.081a.063.063 0 0 1 .056-.036c1.193.046 2.212.688 3.292.985.264.07.55.127.783.06.233-.06.335-.307.342-.572a4.158 4.158 0 0 0-.282-1.63 3.518 3.518 0 0 0-.914-1.361c-.41-.367-.928-.618-1.475-.664a2.452 2.452 0 0 0-1.566.406c-.466.296-.847.73-1.111 1.228a.062.062 0 0 1-.085.024.06.06 0 0 1-.032-.06v-.024m-28.61-25.012s-6.442 6.166-3.732 15.568c0 0-7.43-11.144.998-17.576l2.734 2.008"
                fill="#1d2238"
              />
              <path
                d="M809.424 196.162c13.24 56.811 27.337 112.056 39.543 156.937-30.48 18.676-79.477 13.543-98.64 7.712-.533-.163-3.013-39.561-.247-73.685 2.776-34.294 10.657-70.92 31.446-84.977 9.31-1.933 18.613-3.98 27.898-5.987"
                fill="#f0c36a"
              />
              <path
                d="M815.53 526.969c-1.848-4.466-3.601-8.964-5.4-13.448-1.782-4.487-3.493-9.003-5.243-13.5l-2.614-6.756-2.54-6.78-5.076-13.569-.021-.06-.018-.08c-1.242-5.786-2.367-11.593-3.52-17.393l-3.44-17.406-3.264-17.445c-.536-2.907-1.033-5.824-1.552-8.738l-.772-4.367-.734-4.378.113-.025 14.238 69.532-.007-.014 19.956 54.388-.105.039"
                fill="#4a4e60"
              />
              <path d="m857.32 595.866-32.691 27.609a15.773 15.773 0 0 0-4.851 16.856l81.665-24.575-13.434-29.125-30.688 9.235" fill="#f0c36a" />
              <path
                d="M899.813 610.337c-6.618 2.4-13.286 4.618-19.971 6.774-3.34 1.097-6.7 2.127-10.047 3.189l-10.076 3.087-10.107 2.988c-3.38.963-6.745 1.958-10.135 2.885-6.766 1.895-13.554 3.722-20.394 5.37 6.615-2.403 13.282-4.622 19.97-6.78 3.338-1.098 6.696-2.124 10.044-3.186l10.08-3.084 10.103-2.988c3.38-.963 6.748-1.958 10.139-2.885 6.766-1.891 13.553-3.722 20.394-5.37m-13.445-9.147a7.748 7.748 0 0 1-5.186 9.648 7.747 7.747 0 1 1 5.186-9.648m-57.555 17.808c.846-.684 1.774-.967 2.698-1.09a6.826 6.826 0 0 1 2.76.243 6.517 6.517 0 0 1 2.48 1.387c.715.652 1.294 1.524 1.47 2.575l-.13.138c-.335-.25-.635-.537-.995-.745-.177-.11-.339-.24-.519-.338l-.543-.3a12.308 12.308 0 0 0-2.304-.907 17.11 17.11 0 0 0-2.423-.554c-.413-.06-.826-.11-1.242-.14a13.33 13.33 0 0 0-1.242-.078l-.01-.191m8.371-6.957c.843-.684 1.771-.966 2.695-1.09a6.837 6.837 0 0 1 2.763.244 6.51 6.51 0 0 1 2.476 1.382c.716.657 1.295 1.528 1.471 2.58l-.13.137c-.332-.25-.635-.536-.995-.744-.173-.113-.335-.24-.515-.34l-.544-.303a12.477 12.477 0 0 0-2.307-.903 16.637 16.637 0 0 0-3.662-.695 12.29 12.29 0 0 0-1.245-.077l-.007-.19m7.768-6.365c.843-.688 1.771-.966 2.695-1.09a6.837 6.837 0 0 1 2.763.243 6.51 6.51 0 0 1 2.476 1.383c.716.653 1.295 1.524 1.471 2.58l-.13.133c-.332-.25-.635-.532-.995-.74-.173-.113-.335-.24-.519-.343l-.54-.3a12.743 12.743 0 0 0-2.307-.906 16.627 16.627 0 0 0-2.423-.55 20.96 20.96 0 0 0-1.238-.145 14.88 14.88 0 0 0-1.246-.078l-.007-.187"
                fill="#1d2238"
              />
              <path d="M769.236 171.02c-1.528.444-7.37.8-7.815-.727l9.776-2.84c.444 1.524-.081 3.133-1.961 3.567" fill="#fff" />
              <path d="m821.291 210.89 10.584 66.393-47.805 3.228s-12.27-83.174 25.354-84.349a19.035 19.035 0 0 1 11.867 14.729" fill="#f0c36a" />
              <path d="m683.824 201.411-37.694 12.686 92.04 273.463 37.694-12.69-92.04-273.459" fill="#d2d6e1" />
              <path d="m783 496.073-37.693 12.689-7.137-21.202 37.694-12.69 7.137 21.203" fill="#fff" />
              <path d="M771.031 522.852c-10.41 3.503-21.689-2.096-25.192-12.502l-.532-1.588L783 496.072l.533 1.588c3.503 10.41-2.096 21.689-12.503 25.192" fill="#d2d6e1" />
              <path
                d="M761.164 479.82c-2.113-5.443-4.12-10.918-6.152-16.386l-3.038-8.206-2.974-8.227-1.485-4.113-1.464-4.124-2.921-8.245a875.9 875.9 0 0 1-2.893-8.255l-2.871-8.262-.357-1.033.85-.755c1.528-1.355 2.583-3.235 2.907-5.242.17-.999.17-2.025-.007-3.02-.06-.247-.098-.498-.169-.745-.081-.24-.127-.49-.233-.723l-.282-.705-.353-.674a8.953 8.953 0 0 0-4.522-3.856 8.953 8.953 0 0 0-5.93-.099 8.947 8.947 0 0 0-4.668 3.662 8.944 8.944 0 0 0-1.27 5.81l.127.748.201.734c.057.25.173.476.25.72.092.236.212.458.315.691a8.904 8.904 0 0 0 1.823 2.413c1.468 1.404 3.45 2.261 5.486 2.42l1.133.088.335 1.034 2.713 8.318 1.354 4.156 1.33 4.166 2.66 8.337 1.327 4.166 1.301 4.177 2.61 8.35 2.54 8.371c1.69 5.585 3.402 11.159 5.01 16.772l-.187.063-22.387-66.294.152.116c-2.46-.158-4.865-1.157-6.668-2.85a10.774 10.774 0 0 1-2.233-2.928c-.127-.279-.271-.554-.384-.84-.103-.289-.237-.568-.31-.868-.085-.3-.174-.592-.251-.892l-.159-.91a10.912 10.912 0 0 1 1.52-7.102c1.306-2.099 3.355-3.71 5.694-4.512a10.92 10.92 0 0 1 7.264.152 10.89 10.89 0 0 1 5.503 4.734l.424.826c.12.282.229.571.342.857.123.286.183.59.279.882.08.296.134.603.2.903a10.828 10.828 0 0 1-.01 3.68c-.41 2.437-1.725 4.692-3.584 6.304l.05-.184 22.252 66.337-.19.063M645.936 213.808l-.339-4.131-.275-4.135-.543-8.265-.44-8.273c-.146-2.755-.248-5.514-.375-8.269l-.18-4.138-.144-4.135-.283-8.272-.412-16.549-.145-5.789 3.38 4.699c3.224 4.48 6.47 8.943 9.673 13.434l4.78 6.759 2.385 3.383 2.356 3.404c1.567 2.272 3.154 4.527 4.703 6.813l4.65 6.854 4.568 6.91 2.282 3.458 2.23 3.496-.159.117-39.074-53.457.36-.12 1.2 66.203-.198.003"
                fill="#1d2238"
              />
              <path
                d="m686.033 208.39-36.46 12.273a3.814 3.814 0 0 1-2.434-7.228l36.46-12.27a3.81 3.81 0 0 1 4.83 2.395 3.81 3.81 0 0 1-2.396 4.83m94.177 269.042a3.814 3.814 0 0 0-4.83-2.396l-36.459 12.27a3.813 3.813 0 0 0-2.399 4.83 3.812 3.812 0 0 0 3.807 2.589 3.816 3.816 0 0 0-1.588 4.441 3.812 3.812 0 0 0 3.807 2.59 3.813 3.813 0 0 0 3.242 6.84l36.46-12.273a3.81 3.81 0 0 0-1.412-7.419 3.806 3.806 0 0 0 1.588-4.441 3.814 3.814 0 0 0-3.807-2.59 3.813 3.813 0 0 0 1.591-4.441"
                fill="#1d2238"
              />
              <path
                d="m760.543 173.277-5.443-1.315a3.4 3.4 0 0 0-4.103 2.508 3.402 3.402 0 0 0 1.542 3.704l-.265-.064a3.398 3.398 0 0 0-4.103 2.505 3.395 3.395 0 0 0 2.293 4.04 3.407 3.407 0 0 0-2.776 2.56 3.405 3.405 0 0 0 2.508 4.103l5.443 1.316a3.4 3.4 0 0 0 2.826-6.036l.388.096a3.398 3.398 0 1 0 1.595-6.608l-.462-.113a3.4 3.4 0 0 0 .557-6.696"
                fill="#eb9481"
              />
              <path
                d="M760.543 173.277a3.41 3.41 0 0 1 1.267.47c.391.247.733.571 1.008.96a3.62 3.62 0 0 1 .565 2.754l.01-.08-.01.08a3.772 3.772 0 0 1-1.16 2.05c-.6.54-1.38.889-2.202.967l.085-.999c.437.085 1.03.208 1.51.49.493.269.924.646 1.259 1.098.674.9.949 2.11.688 3.22a4.01 4.01 0 0 1-1.997 2.646 3.94 3.94 0 0 1-1.63.473c-.144.007-.285.004-.427.004a8.338 8.338 0 0 1-.426-.04c-.138-.027-.286-.052-.413-.084l-.35-.084.516-1.098a3.95 3.95 0 0 1 1.354 1.838c.258.724.293 1.524.11 2.262a3.843 3.843 0 0 1-1.14 1.933 3.889 3.889 0 0 1-1.986.97 3.491 3.491 0 0 1-1.1.014c-.184-.014-.368-.074-.544-.113l-.47-.155c-.62-.208-1.244-.413-1.862-.631a115.891 115.891 0 0 1-3.704-1.337c1.291.246 2.572.522 3.845.81.639.139 1.277.29 1.912.442l.477.113c.144.017.278.05.423.046.29.02.575-.014.85-.078a2.892 2.892 0 0 0 1.443-.822c.385-.402.65-.903.759-1.44.236-1.075-.237-2.229-1.105-2.86l-2.48-1.8 2.992.703.353.084.296.053.293.025.296-.007a2.862 2.862 0 0 0 1.115-.335 2.768 2.768 0 0 0 1.4-1.807 2.884 2.884 0 0 0-.423-2.271 2.684 2.684 0 0 0-.868-.822c-.353-.216-.709-.321-1.206-.452l-3.39-.893 3.474-.109a2.937 2.937 0 0 0 1.708-.624 3.015 3.015 0 0 0 1.058-1.542l-.01.081.01-.08a3.206 3.206 0 0 0-.24-2.386 3.381 3.381 0 0 0-1.933-1.637m6.438 14.009c.992.201 1.976.367 2.964.519.987.144 1.972.286 2.963.374.991.099 1.983.176 2.98.222.996.056 1.994.063 3.01.113-.988.215-2 .35-3.013.38-1.012.057-2.028.004-3.04-.084a21.575 21.575 0 0 1-3-.518c-.98-.247-1.954-.558-2.864-1.006"
                fill="#1d2238"
              />
              <path
                d="M780.447 496.74c1.132-.445 2.268-.865 3.404-1.292 1.094-.42 1.947-1.362 2.237-2.466.3-1.093.042-2.314-.67-3.175a3.492 3.492 0 0 0-2.925-1.287l-1.362.095 1.157-.748a3.525 3.525 0 0 0 1.394-1.74 3.427 3.427 0 0 0 .042-2.222 3.435 3.435 0 0 0-1.309-1.788 3.484 3.484 0 0 0-2.141-.625l-1.397.057 1.189-.716a3.481 3.481 0 0 0 1.654-2.766 3.504 3.504 0 0 0-.292-1.651 3.77 3.77 0 0 0-1.034-1.344 3.774 3.774 0 0 0-1.556-.723 3.82 3.82 0 0 0-1.74.07c-1.17.346-2.345.706-3.527 1.037 1.143-.451 2.29-.878 3.44-1.309a4.01 4.01 0 0 1 1.894-.194 4.16 4.16 0 0 1 1.785.727c.53.385.956.907 1.249 1.496.286.59.434 1.256.413 1.92a4.153 4.153 0 0 1-1.905 3.34l-.208-.656a4.16 4.16 0 0 1 2.593.73 4.15 4.15 0 0 1 1.538 4.872 4.136 4.136 0 0 1-1.708 2.085l-.204-.653c1.326-.063 2.656.554 3.45 1.609.8 1.044 1.051 2.47.645 3.7a4.038 4.038 0 0 1-.994 1.627 4.01 4.01 0 0 1-1.616.963c-1.164.346-2.325.698-3.496 1.026"
                fill="#fff"
              />
              <path
                d="M727.858 286.777a373.08 373.08 0 0 1 5.585-.801c1.862-.247 3.725-.498 5.591-.723 1.863-.24 3.73-.463 5.595-.678 1.866-.222 3.733-.434 5.599-.631l-.603.652c.06-3.975.388-7.902.804-11.828.448-3.923 1.009-7.832 1.753-11.709.73-3.877 1.62-7.726 2.685-11.525.264-.95.547-1.895.825-2.84.304-.938.59-1.88.91-2.812.614-1.873 1.313-3.718 2.04-5.545a212.027 212.027 0 0 0-2.886 11.42 231.488 231.488 0 0 0-1.196 5.756 296.32 296.32 0 0 0-1.037 5.782c-.31 1.937-.6 3.87-.879 5.81a202.02 202.02 0 0 0-.723 5.829 167.58 167.58 0 0 0-.578 5.842c-.145 1.947-.31 3.908-.381 5.842l-.022.603-.582.053c-1.873.162-3.743.31-5.62.448-1.873.148-3.746.286-5.62.409-1.872.134-3.75.247-5.626.36-1.877.11-3.753.208-5.634.286"
                fill="#1d2238"
              />
              <path
                d="M689.878 308.935a2.876 2.876 0 0 0 3.016 2.427c7.229-.427 27.129-1.577 29.076-1.376l69.78 7.182c45.236 3.934 41.994-17.508 40.1-40.442l-107.597 10.4a6.826 6.826 0 0 1-7.123-4.618l-2.24-6.653c-.702-2.089-2.931-3.345-5.038-2.696-.017.007-.038.011-.056.018-.917.296-1.446 1.263-1.266 2.212l1.81 9.447-20.575-3.669c-2.332-.416-4.847.149-5.358 2.46-.523 2.363.296 3.841 3.252 4.956l13.988 4.233-16.93-.427c-2.374-.056-5.302.462-5.524 3.306-.187 2.423.987 4.201 3.623 4.656l20.8 3.25-11.399 2.042a2.883 2.883 0 0 0-2.339 3.292"
                fill="#eb9481"
              />
              <path
                d="M784.07 280.511c2.501.304 4.967.762 7.415 1.274 2.452.5 4.886 1.08 7.306 1.7 2.42.625 4.83 1.295 7.218 2.04 2.392.737 4.77 1.53 7.109 2.472-2.505-.303-4.968-.758-7.42-1.27a151.153 151.153 0 0 1-7.302-1.704c-2.42-.628-4.83-1.298-7.218-2.042-2.392-.738-4.77-1.528-7.108-2.47m-87.52 1.948c1.569.127 3.128.328 4.68.553 1.556.223 3.105.487 4.65.759 1.542.286 3.083.582 4.614.924 1.535.335 3.066.695 4.58 1.13a74.375 74.375 0 0 1-4.685-.551 138.48 138.48 0 0 1-4.646-.762c-1.542-.29-3.084-.586-4.615-.925a73.445 73.445 0 0 1-4.579-1.128m-3.521 10.138a33.993 33.993 0 0 1 3.112-.077c1.034.01 2.067.067 3.097.13 1.03.078 2.06.166 3.087.297a31.62 31.62 0 0 1 3.07.508 31.758 31.758 0 0 1-3.112.077 60.435 60.435 0 0 1-3.098-.13 60.34 60.34 0 0 1-3.083-.297 31.69 31.69 0 0 1-3.073-.508m1.246 9.543a31.527 31.527 0 0 1 3.058.106 58.37 58.37 0 0 1 3.03.31 58.59 58.59 0 0 1 3.01.477 31.63 31.63 0 0 1 2.98.684 30.41 30.41 0 0 1-3.058-.102 58.37 58.37 0 0 1-3.03-.31 62.033 62.033 0 0 1-3.01-.477 31.65 31.65 0 0 1-2.98-.688"
                fill="#1d2238"
              />
              <path
                d="M831.882 277.41a439.3 439.3 0 0 1-11.896 1.602l-5.955.709-5.958.65-2.981.324-2.981.293-5.966.578-2.98.29-2.985.253-5.97.512-1.94.166-.296-2c-.187-1.25-.367-2.442-.494-3.666-.134-1.217-.254-2.43-.363-3.648a254.614 254.614 0 0 1-.307-3.65 97.189 97.189 0 0 1-.226-3.656 266.416 266.416 0 0 1-.208-7.32c-.003-.61-.02-1.22-.014-1.83l.025-1.832c.028-1.22.056-2.44.102-3.661.039-1.221.099-2.442.162-3.659.089-1.22.177-2.437.286-3.655.099-1.217.23-2.434.35-3.647.148-1.214.3-2.424.483-3.634.674-4.836 1.672-9.638 3.097-14.302l.004-.014a.127.127 0 0 1 .247.057 150.567 150.567 0 0 0-1.793 14.386 183.77 183.77 0 0 0-.423 7.236 207.08 207.08 0 0 0-.159 7.25c-.031 4.832.103 9.669.364 14.495.26 4.822.603 9.652 1.178 14.446l-.23-.19 47.813-3.137a.13.13 0 0 1 .134.12.127.127 0 0 1-.11.134h-.01"
                fill="#1d2238"
              />
              <path
                d="M949.664 109.072c0 27.375-24.723 49.565-55.217 49.565-30.498 0-55.22-22.19-55.22-49.565 0-27.376 24.722-49.569 55.22-49.569 30.494 0 55.217 22.193 55.217 49.569m-99.007 42.171c0 6.876-5.574 12.45-12.45 12.45-6.876 0-12.45-5.574-12.45-12.45 0-6.876 5.574-12.45 12.45-12.45 6.876 0 12.45 5.574 12.45 12.45m-23.605 15.826a6.225 6.225 0 0 1-12.45 0 6.222 6.222 0 0 1 6.224-6.223 6.223 6.223 0 0 1 6.226 6.223"
                fill="#f1f2f5"
              />
              <path d="M990.417 644.962H67.564a.882.882 0 0 1 0-1.763h922.853a.882.882 0 0 1 0 1.763M545.81 235.151H228.62v-30.314h317.19v30.314" fill="#1d2238" />
              <path d="M254.555 220.08a4.336 4.336 0 0 1-4.337 4.336 4.335 4.335 0 1 1 0-8.671 4.336 4.336 0 0 1 4.337 4.335" fill="#f0c36a" />
              <path
                d="M271.78 219.996a4.338 4.338 0 1 1-8.676-.004 4.338 4.338 0 0 1 8.676.004m16.666-.088a4.336 4.336 0 0 1-4.337 4.335 4.336 4.336 0 0 1-4.337-4.335 4.339 4.339 0 0 1 4.337-4.34 4.339 4.339 0 0 1 4.337 4.34"
                fill="#d2d6e1"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;