import { Input, Mutation, Query, Router } from 'nestjs-trpc';
import { TodosService } from './todos.service';
import { z } from 'zod';
import { createTodoSchema, todoSchema } from './todos.schema';

@Router({
  alias: 'todos',
})
export class TodoRouter {
  constructor(private readonly todosService: TodosService) {}
  @Query({
    input: z.object({ id: z.string() }),
    output: todoSchema,
  })
  getTodoById(@Input('id') id: string) {
    return this.todosService.getTodoById(id);
  }

  @Query({
    output: z.array(todoSchema),
  })
  getAllTodos() {
    return this.todosService.getAllTodos;
  }

  @Mutation({
    input: createTodoSchema,
    output: todoSchema,
  })
  createTodo(@Input() todoData: createTodoInput) {
    return this.todosService.createTodo(todoData);
  }

  @Mutation({
    input: z.object({ id: z.string(), data: todoSchema.partial() }),
    output: todoSchema,
  })
  updateTodo(
    @Input('id') id: string,
    @Input('data') data: Partial<createTodoInput>,
  ) {
    return this.todosService.updateTodo(id, data);
  }

  @Mutation({
    input: z.object({ id: z.string() }),
    output: z.boolean(),
  })
  deleteTodo(@Input('id') id: string) {
    return this.todosService.deleteTodo(id);
  }
}
