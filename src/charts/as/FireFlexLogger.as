/**
 * @author Tomasz Kuter
 */
package
{
    import com.yahoo.yui.YUIAdapter;

    public class FireFlexLogger {
        private static var instance : YUIAdapter;
        private static var allowInstantiation:Boolean = false;

        public static function setInstance(yuiAdapter:YUIAdapter):void {
            instance = yuiAdapter;
        }

        public static function getInstance():YUIAdapter {
            return instance;
        }

        public function FireFlexLogger():void {
            if (!allowInstantiation) {
                throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
            }
        }
    }
}