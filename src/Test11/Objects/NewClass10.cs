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


    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// NewClass10.
    /// </summary>
    // *** Start programmer edit section *** (NewClass10 CustomAttributes)

    // *** End programmer edit section *** (NewClass10 CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    public class NewClass10 : ICSSoft.STORMNET.DataObject
    {

        private IIS.Test11.NewClass9 fNewClass9;

        // *** Start programmer edit section *** (NewClass10 CustomMembers)

        // *** End programmer edit section *** (NewClass10 CustomMembers)


        /// <summary>
        /// мастеровая ссылка на шапку IIS.Test11.NewClass9.
        /// </summary>
        // *** Start programmer edit section *** (NewClass10.NewClass9 CustomAttributes)

        // *** End programmer edit section *** (NewClass10.NewClass9 CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "NewClass9"})]
        public virtual IIS.Test11.NewClass9 NewClass9
        {
            get
            {
                // *** Start programmer edit section *** (NewClass10.NewClass9 Get start)

                // *** End programmer edit section *** (NewClass10.NewClass9 Get start)
                IIS.Test11.NewClass9 result = this.fNewClass9;
                // *** Start programmer edit section *** (NewClass10.NewClass9 Get end)

                // *** End programmer edit section *** (NewClass10.NewClass9 Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (NewClass10.NewClass9 Set start)

                // *** End programmer edit section *** (NewClass10.NewClass9 Set start)
                this.fNewClass9 = value;
                // *** Start programmer edit section *** (NewClass10.NewClass9 Set end)

                // *** End programmer edit section *** (NewClass10.NewClass9 Set end)
            }
        }
    }

    /// <summary>
    /// Detail array of NewClass10.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfNewClass10 CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfNewClass10 CustomAttributes)
    public class DetailArrayOfNewClass10 : ICSSoft.STORMNET.DetailArray
    {

        // *** Start programmer edit section *** (IIS.Test11.DetailArrayOfNewClass10 members)

        // *** End programmer edit section *** (IIS.Test11.DetailArrayOfNewClass10 members)


        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type NewClass10 by index.
        /// </summary>
        /// <summary>
        /// Adds object with type NewClass10.
        /// </summary>
        public DetailArrayOfNewClass10(IIS.Test11.NewClass9 fNewClass9) : 
                base(typeof(NewClass10), ((ICSSoft.STORMNET.DataObject)(fNewClass9)))
        {
        }

        public IIS.Test11.NewClass10 this[int index]
        {
            get
            {
                return ((IIS.Test11.NewClass10)(this.ItemByIndex(index)));
            }
        }

        public virtual void Add(IIS.Test11.NewClass10 dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
