export default function () {
  return `<form action="">
      <table>
        <tr>
          <td><label for="title-edit">Title</label></td>
          <td><input type="text" id="title-edit" class="editor" /></td>
        </tr>
        <tr>
          <td><label for="author-edit">Author</label></td>
          <td><input type="text" id="author-edit" class="editor" /></td>
        </tr>
        <tr>
          <td>
            <label for="author-edit">Category</label>
          </td>
          <td><input type="text" id="category-edit" class="editor" /></td>
        </tr>
        <tr>
          <td><label for="tag">Tags</label></td>
          <td><input type="text" id="tag-edit" class="editor" /></td>
        </tr>
        <tr>
          <td>Body</td>
          <td>
            <textarea
              id="body-edit"
              cols="30"
              rows="10"
              class="editor"
            ></textarea>
          </td>
        </tr>
      </table>`;
}
