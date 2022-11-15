const newFormHandler = async(event) => {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('input[name="content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
  
document
    .querySelector('#new-post-form')
    .addEventListener('submit', newFormHandler);
    
const deleteFormHandler = async(event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({ post_id: id }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
      
}

document
    .querySelector('.delete-post-btn')
    .addEventListener('click', deleteFormHandler);

const editFormHandler = async(event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_id: id, title, content }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }

}

document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editFormHandler);