/**
 * Интерфейс для представления текущего пользователя.
 */
export interface ICurrentUser {
  /**
   * Уникальный идентификатор пользователя
   */
  id: string;

  /**
   * Адрес электронной почты пользователя
   */
  email: string;

  /**
   * Статус подтверждения электронной почты
   */
  emailConfirmed: boolean;

  /**
   * Имя пользователя
   */
  firstName: string;

  /**
   * Фамилия пользователя
   */
  lastName: string;

  /**
   * Отчество пользователя (может отсутствовать)
   */
  middleName: string | null;
}