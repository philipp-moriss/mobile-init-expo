export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: "auth/user/login",
    SIGN_UP: "auth/user/register",
    GET_ME: "user",
    CREATE_USER: "user",
    UPDATE_USER: "user/{userId}",
    LOGIN_BY_CODE: "auth/user/login-by-code",
    GET_REFERRAL: "user/{referral}",
    REGISTER_CUSTOMER: "auth/user/register",
  },
  PROFILE: {
    UPDATE_MENTOR: "mentor/profile",
    UPDATE_CUSTOMER: "customer/profile",
    UPDATE_AVATAR: "user/avatar",
    GET_USER_ID: "user/id/{id}",
    FULL_DELETE_ACCOUNT: "user/fullDeleteAccount",
    GENERATE_USER_DOSSIER: "dosier/generate/{customerId}",
  },
  DIARY: {
    GET_DIARY: "diary",
    CREATE_DIARY: "diary",
  },
  TASK: {
    GET: "task",
    CHANGE_TASK_STATUS: "task/${data.taskId}/status/${data.status}",
    CREATE: "task",
    GET_CREATED_TASK: "task/created",
    GET_ASSIGN: "task/assign",
    SEND_TASK_REVIEW_QUESTIONS: "task/${data.taskId}/review-questions",
    GET_NEW_TASK: "hint/task/${id}",
    SEND_TASK_ANSWER_QUESTIONS_CUSTOMER: "review/{id}}/answers",
    GET_NEW_AI_TASK: "hint/task/{id}",
    GENERATE_TASK_FEEDBACK: "hint/task-feedback/{customerId}/{taskId}",
    GET_ASSIGN_CUSTOMER: "task/customer/{id}",

    UPDATE_TASK_ASSIGN: "task/{id}/assign/{assignId}",
    UPDATE_TASK: "task/{taskId}/status/{status}",
    UPDATE_TASK_REVIEW_QUESTIONS: "task/{taskId}/review-questions",
    FEEDBACK: "task/{taskId}/feedback",
  },
  SURVEY: {
    GET: "survey/{id}",
    SUBMIT: "survey/{id}/submit",
  },
  CHAT: {
    CREATE: "chat",
    GET_USER_CHATS: "chat/user/{userId}",
    GET_USER_CHAT_BY_RECEIVER: "chat/user/{userId}/receiver/{receiverId}",
    GET_CHAT_MESSAGES: "chat/{chatId}/messages",
    GET_CHAT_STATUS: "chat/{chatId}/status",
  },
  SYSTEM: {
    GET_APP_VERSION: "system-core/app-version",
  },
  WORK_TIME: {
    GET_WORK_TIME_SESSIONS: "work-time/sessions",
  },
};
