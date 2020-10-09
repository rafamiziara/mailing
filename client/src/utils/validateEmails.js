// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default (emails) => {
  const emailsArray = emails
    .split(',')
    .map(email => email.trim());

  if(emailsArray.length > 5) {
    return 'As a test project, you cannot send more than 5 emails at a time.'
  }
  
  const invalidEmails = emailsArray
    .filter(email => email && re.test(email) === false);

  if(invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};