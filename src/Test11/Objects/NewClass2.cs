﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Test11
{
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business.Audit;
    using ICSSoft.STORMNET.Business.Audit.Objects;


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// New class2.
    /// </summary>
    // *** Start programmer edit section *** (NewClass2 CustomAttributes)

    // *** End programmer edit section *** (NewClass2 CustomAttributes)
    [AutoAltered()]
    [Caption("New class2")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("AuditView", new string[] {
            "NewClass1 as \'New class1\'",
            "NewClass4 as \'New class4\'",
            "NewClass5 as \'New class5\'"})]
    [View("NewClass2E", new string[] {
            "NewClass1 as \'New class1\'",
            "NewClass4 as \'New class4\'",
            "NewClass5 as \'New class5\'"})]
    [MasterViewDefineAttribute("NewClass2E", "NewClass1", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [MasterViewDefineAttribute("NewClass2E", "NewClass4", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [MasterViewDefineAttribute("NewClass2E", "NewClass5", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "")]
    [View("NewClass2L", new string[0])]
    public class NewClass2 : IIS.Test11.NewClass3, IDataObjectWithAuditFields
    {

        private IIS.Test11.NewClass1 fNewClass1;

        private IIS.Test11.NewClass4 fNewClass4;

        // *** Start programmer edit section *** (NewClass2 CustomMembers)

        // *** End programmer edit section *** (NewClass2 CustomMembers)


        /// <summary>
        /// Время создания объекта.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.CreateTime CustomAttributes)

        // *** End programmer edit section *** (NewClass2.CreateTime CustomAttributes)
        public override System.Nullable<System.DateTime> CreateTime
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.CreateTime Get start)

                // *** End programmer edit section *** (NewClass2.CreateTime Get start)
                System.Nullable<System.DateTime> result = base.CreateTime;
                // *** Start programmer edit section *** (NewClass2.CreateTime Get end)

                // *** End programmer edit section *** (NewClass2.CreateTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.CreateTime Set start)

                // *** End programmer edit section *** (NewClass2.CreateTime Set start)
                base.CreateTime = value;
                // *** Start programmer edit section *** (NewClass2.CreateTime Set end)

                // *** End programmer edit section *** (NewClass2.CreateTime Set end)
            }
        }

        /// <summary>
        /// Создатель объекта.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.Creator CustomAttributes)

        // *** End programmer edit section *** (NewClass2.Creator CustomAttributes)
        [StrLen(255)]
        public override string Creator
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.Creator Get start)

                // *** End programmer edit section *** (NewClass2.Creator Get start)
                string result = base.Creator;
                // *** Start programmer edit section *** (NewClass2.Creator Get end)

                // *** End programmer edit section *** (NewClass2.Creator Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.Creator Set start)

                // *** End programmer edit section *** (NewClass2.Creator Set start)
                base.Creator = value;
                // *** Start programmer edit section *** (NewClass2.Creator Set end)

                // *** End programmer edit section *** (NewClass2.Creator Set end)
            }
        }

        /// <summary>
        /// Последний редактор объекта.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.Editor CustomAttributes)

        // *** End programmer edit section *** (NewClass2.Editor CustomAttributes)
        [StrLen(255)]
        public override string Editor
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.Editor Get start)

                // *** End programmer edit section *** (NewClass2.Editor Get start)
                string result = base.Editor;
                // *** Start programmer edit section *** (NewClass2.Editor Get end)

                // *** End programmer edit section *** (NewClass2.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.Editor Set start)

                // *** End programmer edit section *** (NewClass2.Editor Set start)
                base.Editor = value;
                // *** Start programmer edit section *** (NewClass2.Editor Set end)

                // *** End programmer edit section *** (NewClass2.Editor Set end)
            }
        }

        /// <summary>
        /// Время последнего редактирования объекта.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.EditTime CustomAttributes)

        // *** End programmer edit section *** (NewClass2.EditTime CustomAttributes)
        public override System.Nullable<System.DateTime> EditTime
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.EditTime Get start)

                // *** End programmer edit section *** (NewClass2.EditTime Get start)
                System.Nullable<System.DateTime> result = base.EditTime;
                // *** Start programmer edit section *** (NewClass2.EditTime Get end)

                // *** End programmer edit section *** (NewClass2.EditTime Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.EditTime Set start)

                // *** End programmer edit section *** (NewClass2.EditTime Set start)
                base.EditTime = value;
                // *** Start programmer edit section *** (NewClass2.EditTime Set end)

                // *** End programmer edit section *** (NewClass2.EditTime Set end)
            }
        }

        /// <summary>
        /// New class2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.NewClass1 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.NewClass1 CustomAttributes)
        [PropertyStorage(new string[] {
                "NewClass1"})]
        [NotNull()]
        public virtual IIS.Test11.NewClass1 NewClass1
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get start)
                IIS.Test11.NewClass1 result = this.fNewClass1;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Get end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set start)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set start)
                this.fNewClass1 = value;
                // *** Start programmer edit section *** (NewClass2.NewClass1 Set end)

                // *** End programmer edit section *** (NewClass2.NewClass1 Set end)
            }
        }

        /// <summary>
        /// New class2.
        /// </summary>
        // *** Start programmer edit section *** (NewClass2.NewClass4 CustomAttributes)

        // *** End programmer edit section *** (NewClass2.NewClass4 CustomAttributes)
        [PropertyStorage(new string[] {
                "NewClass4"})]
        [NotNull()]
        public virtual IIS.Test11.NewClass4 NewClass4
        {
            get
            {
                // *** Start programmer edit section *** (NewClass2.NewClass4 Get start)

                // *** End programmer edit section *** (NewClass2.NewClass4 Get start)
                IIS.Test11.NewClass4 result = this.fNewClass4;
                // *** Start programmer edit section *** (NewClass2.NewClass4 Get end)

                // *** End programmer edit section *** (NewClass2.NewClass4 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass2.NewClass4 Set start)

                // *** End programmer edit section *** (NewClass2.NewClass4 Set start)
                this.fNewClass4 = value;
                // *** Start programmer edit section *** (NewClass2.NewClass4 Set end)

                // *** End programmer edit section *** (NewClass2.NewClass4 Set end)
            }
        }

        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {

            /// <summary>
            /// "AuditView" view.
            /// </summary>
            public static ICSSoft.STORMNET.View AuditView
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("AuditView", typeof(IIS.Test11.NewClass2));
                }
            }

            /// <summary>
            /// "NewClass2E" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2E
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2E", typeof(IIS.Test11.NewClass2));
                }
            }

            /// <summary>
            /// "NewClass2L" view.
            /// </summary>
            public static ICSSoft.STORMNET.View NewClass2L
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("NewClass2L", typeof(IIS.Test11.NewClass2));
                }
            }
        }

        /// <summary>
        /// Audit class settings.
        /// </summary>
        public class AuditSettings
        {

            /// <summary>
            /// Включён ли аудит для класса.
            /// </summary>
            public static bool AuditEnabled = true;

            /// <summary>
            /// Использовать имя представления для аудита по умолчанию.
            /// </summary>
            public static bool UseDefaultView = false;

            /// <summary>
            /// Включён ли аудит операции чтения.
            /// </summary>
            public static bool SelectAudit = false;

            /// <summary>
            /// Имя представления для аудирования операции чтения.
            /// </summary>
            public static string SelectAuditViewName = "AuditView";

            /// <summary>
            /// Включён ли аудит операции создания.
            /// </summary>
            public static bool InsertAudit = true;

            /// <summary>
            /// Имя представления для аудирования операции создания.
            /// </summary>
            public static string InsertAuditViewName = "AuditView";

            /// <summary>
            /// Включён ли аудит операции изменения.
            /// </summary>
            public static bool UpdateAudit = false;

            /// <summary>
            /// Имя представления для аудирования операции изменения.
            /// </summary>
            public static string UpdateAuditViewName = "AuditView";

            /// <summary>
            /// Включён ли аудит операции удаления.
            /// </summary>
            public static bool DeleteAudit = true;

            /// <summary>
            /// Имя представления для аудирования операции удаления.
            /// </summary>
            public static string DeleteAuditViewName = "AuditView";

            /// <summary>
            /// Путь к форме просмотра результатов аудита.
            /// </summary>
            public static string FormUrl = "";

            /// <summary>
            /// Режим записи данных аудита (синхронный или асинхронный).
            /// </summary>
            public static ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode WriteMode = ICSSoft.STORMNET.Business.Audit.Objects.tWriteMode.Synchronous;

            /// <summary>
            /// Максимальная длина сохраняемого значения поля (если 0, то строка обрезаться не будет).
            /// </summary>
            public static int PrunningLength = 0;

            /// <summary>
            /// Показывать ли пользователям в изменениях первичные ключи.
            /// </summary>
            public static bool ShowPrimaryKey = false;

            /// <summary>
            /// Сохранять ли старое значение.
            /// </summary>
            public static bool KeepOldValue = true;

            /// <summary>
            /// Сжимать ли сохраняемые значения.
            /// </summary>
            public static bool Compress = false;

            /// <summary>
            /// Сохранять ли все значения атрибутов, а не только изменяемые.
            /// </summary>
            public static bool KeepAllValues = false;
        }
    }
}

