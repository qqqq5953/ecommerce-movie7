import emitter from '@/methods/emitter';

export function pushMessageStateForDashboard(response, item, action) {
  function emitContent(style, status, content) {
    emitter.emit('push-message', {
      title: item.title,
      style,
      status,
      content
    });
  }

  const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message;

  if (response.data.success) {
    emitContent('success', `${action}成功`);
    return;
  }
  emitContent('danger', `${action}失敗`, message.join('、'));
}

export function pushMessageStateForUser(response, title, action) {
  function emitContent(style, status, content) {
    emitter.emit('push-message', {
      title,
      style,
      status,
      content
    });
  }

  if (response) {
    emitContent('success', `${action}`);
    return;
  };
  emitContent('danger', `${action} failed`);
}
