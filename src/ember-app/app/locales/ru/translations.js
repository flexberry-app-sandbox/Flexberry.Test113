import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest11NewClass1LForm from './forms/i-i-s-test11-new-class1-l';
import IISTest11NewClass2LForm from './forms/i-i-s-test11-new-class2-l';
import IISTest11NewClass3LForm from './forms/i-i-s-test11-new-class3-l';
import IISTest11NewClass4LForm from './forms/i-i-s-test11-new-class4-l';
import IISTest11NewClass5LForm from './forms/i-i-s-test11-new-class5-l';
import IISTest11NewClass6LForm from './forms/i-i-s-test11-new-class6-l';
import IISTest11NewClass7LForm from './forms/i-i-s-test11-new-class7-l';
import IISTest11NewClass1EForm from './forms/i-i-s-test11-new-class1-e';
import IISTest11NewClass2EForm from './forms/i-i-s-test11-new-class2-e';
import IISTest11NewClass3EForm from './forms/i-i-s-test11-new-class3-e';
import IISTest11NewClass4EForm from './forms/i-i-s-test11-new-class4-e';
import IISTest11NewClass5EForm from './forms/i-i-s-test11-new-class5-e';
import IISTest11NewClass6EForm from './forms/i-i-s-test11-new-class6-e';
import IISTest11NewClass7EForm from './forms/i-i-s-test11-new-class7-e';
import IISTest11NewClass1Model from './models/i-i-s-test11-new-class1';
import IISTest11NewClass10Model from './models/i-i-s-test11-new-class10';
import IISTest11NewClass2Model from './models/i-i-s-test11-new-class2';
import IISTest11NewClass3Model from './models/i-i-s-test11-new-class3';
import IISTest11NewClass4Model from './models/i-i-s-test11-new-class4';
import IISTest11NewClass5Model from './models/i-i-s-test11-new-class5';
import IISTest11NewClass6Model from './models/i-i-s-test11-new-class6';
import IISTest11NewClass7Model from './models/i-i-s-test11-new-class7';
import IISTest11NewClass8Model from './models/i-i-s-test11-new-class8';
import IISTest11NewClass9Model from './models/i-i-s-test11-new-class9';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test11-new-class1': IISTest11NewClass1Model,
    'i-i-s-test11-new-class10': IISTest11NewClass10Model,
    'i-i-s-test11-new-class2': IISTest11NewClass2Model,
    'i-i-s-test11-new-class3': IISTest11NewClass3Model,
    'i-i-s-test11-new-class4': IISTest11NewClass4Model,
    'i-i-s-test11-new-class5': IISTest11NewClass5Model,
    'i-i-s-test11-new-class6': IISTest11NewClass6Model,
    'i-i-s-test11-new-class7': IISTest11NewClass7Model,
    'i-i-s-test11-new-class8': IISTest11NewClass8Model,
    'i-i-s-test11-new-class9': IISTest11NewClass9Model
  },

  'application-name': 'Test11',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test11',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test11',
          title: 'Test11'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        test11: {
          caption: 'Test11',
          title: 'Test11',
          'i-i-s-test11-new-class1-l': {
            caption: 'New class1',
            title: ''
          },
          'i-i-s-test11-new-class2-l': {
            caption: 'New class2',
            title: ''
          },
          'i-i-s-test11-new-class3-l': {
            caption: 'New class3',
            title: ''
          },
          'i-i-s-test11-new-class4-l': {
            caption: 'New class4',
            title: ''
          },
          'i-i-s-test11-new-class5-l': {
            caption: 'New class5',
            title: ''
          },
          'i-i-s-test11-new-class6-l': {
            caption: 'New class6',
            title: ''
          },
          'i-i-s-test11-new-class7-l': {
            caption: 'New class7',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test11-new-class1-l': IISTest11NewClass1LForm,
    'i-i-s-test11-new-class2-l': IISTest11NewClass2LForm,
    'i-i-s-test11-new-class3-l': IISTest11NewClass3LForm,
    'i-i-s-test11-new-class4-l': IISTest11NewClass4LForm,
    'i-i-s-test11-new-class5-l': IISTest11NewClass5LForm,
    'i-i-s-test11-new-class6-l': IISTest11NewClass6LForm,
    'i-i-s-test11-new-class7-l': IISTest11NewClass7LForm,
    'i-i-s-test11-new-class1-e': IISTest11NewClass1EForm,
    'i-i-s-test11-new-class2-e': IISTest11NewClass2EForm,
    'i-i-s-test11-new-class3-e': IISTest11NewClass3EForm,
    'i-i-s-test11-new-class4-e': IISTest11NewClass4EForm,
    'i-i-s-test11-new-class5-e': IISTest11NewClass5EForm,
    'i-i-s-test11-new-class6-e': IISTest11NewClass6EForm,
    'i-i-s-test11-new-class7-e': IISTest11NewClass7EForm
  },

});

export default translations;
