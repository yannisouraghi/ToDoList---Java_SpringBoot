package com.example.todolist.controller;

import com.example.todolist.service.TaskService;
import com.example.todolist.model.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping(path = "/addTask")
    public Task createTask(Model model, @ModelAttribute("task") Task task) {
        return taskService.addTask(task);
    }

    @GetMapping(path="/tasks")
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }
}
