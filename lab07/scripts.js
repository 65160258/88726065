document.addEventListener("DOMContentLoaded", function () {
    // รับ element จาก DOM
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");

    // รายการสิ่งที่ต้องทำ
    let todos = [];

    // เพิ่มสิ่งที่ต้องทำ
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {
                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList();
            todoInput.value = "";
        }
    }

    // ลบสิ่งที่ต้องทำ
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
    }

    // เปลี่ยนสถานะเสร็จสิ่งที่ต้องทำ
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
    }

    // แสดงรายการสิ่งที่ต้องทำ
    function renderTodoList() {
        console.log(todos);
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            
            // เพิ่ม class ถ้าสิ่งที่ต้องทำเสร็จแล้ว
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }

            // ปุ่มลบ
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));

            // ปุ่มเสร็จ/ยกเลิก
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));

            // เพิ่มปุ่มในรายการ
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
        }
    }

    // เพิ่ม event listener สำหรับปุ่มเพิ่มสิ่งที่ต้องทำ
    addButton.addEventListener("click", addTodo);

    // เพิ่ม event listener สำหรับปุ่ม Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการสิ่งที่ต้องทำเมื่อหน้าเว็บโหลด
    renderTodoList();
});
