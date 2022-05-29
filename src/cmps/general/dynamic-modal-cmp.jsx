import {IoMdClose} from 'react-icons/io'

export const DynamicModalCmp = ({
  modalDetails: { height, width, top },
  onCloseModal,
  modalTitle,
}) => {
  // props:
  // {
  //   component functions and props
  //   component(s) to render
  //   modalTitle
  // height, width, modal size
  // button size: to subtract half of the button size from the top so it will open under the button
  //   *** assuming the event opens in the middle of the button
  //  top subtract button size from it and make it the start point
  // }

  // add title, add title style
  //

  // DEFAULT WIDTH SHOULD BE 304PX
  console.log(modalTitle);
  return (
    <div
      className="modal-container"
      style={{
        position: "absolute",
        top: top + height,
        // for now open in the middle of TD
        right: "100px",
        // width should be either given or default
        // width : width || '304px',
        width : '304px',
      }}
    >
      <div className="modal-header-wrapper">
        <div className="modal-header">
          {/* later use the title */}
          {modalTitle}
          {/* Labels */}
          <span onClick={onCloseModal} className="modal-close-btn">
            <IoMdClose/>
          </span>
        </div>
      </div>
      <div className="modal-content-wrapper">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus recusandae doloribus minima magni vel. Beatae repellendus, mollitia praesentium laudantium eligendi, maiores inventore asperiores explicabo debitis voluptate eaque quas cumque omnis.
      Quo dolorum tenetur adipisci officia ullam dolor odio excepturi, consequatur, iste qui sequi non! Repudiandae, ab veniam ipsam numquam error minus odit delectus nam distinctio quidem alias, cupiditate perspiciatis obcaecati.
      Molestiae culpa soluta asperiores mollitia facere amet id aspernatur natus odio tempore, ipsam, magni molestias distinctio! Accusantium eligendi pariatur alias ratione, quam architecto laborum id voluptate, ipsam ducimus natus at!
      Consectetur, quas. Repellendus hic in culpa dolorem nulla quaerat, nobis aspernatur ad provident mollitia pariatur veniam voluptatem explicabo debitis nisi totam deserunt repudiandae aliquam eligendi quis quisquam eveniet. Enim, consequuntur!
      Blanditiis voluptas expedita alias aspernatur ab commodi dolorem fuga minima adipisci labore necessitatibus odio delectus suscipit dignissimos, vero quasi dolor sapiente non quo deserunt voluptates sed nostrum doloribus obcaecati. Eveniet.
      Vero culpa dolores at eveniet adipisci necessitatibus asperiores quo est, maiores commodi ad impedit debitis neque ut repellat vel autem reiciendis maxime consequuntur rerum! Cum officia quia amet laudantium a!</div>
      {/* <h1 className="modal-title">hi</h1> */}
      {/* <h1 className="modal-title">{title}</h1> */}
    </div>
  );
};
