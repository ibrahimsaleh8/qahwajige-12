export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold">سياسة الخصوصية</h1>

      <p className="text-low-color">
        آخر تحديث: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. مقدمة</h2>
        <p>
          أهلاً بكم في موقعنا. نحن نحرص على حماية خصوصيتكم. تشرح هذه السياسة
          كيفية جمع واستخدام وحماية معلوماتكم عند زيارة موقعنا واستخدام خدماتنا.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. المعلومات التي نجمعها</h2>
        <p>قد نجمع المعلومات التالية:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>المعلومات الشخصية (الاسم، البريد الإلكتروني، رقم الهاتف).</li>
          <li>معلومات الدفع والفواتير.</li>
          <li>بيانات تسجيل الدخول للحساب.</li>
          <li>البيانات التقنية (عنوان IP، نوع المتصفح، بيانات الجهاز).</li>
          <li>بيانات الاستخدام وملفات الكوكيز.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. كيفية استخدام المعلومات</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>لتقديم خدماتنا وإدارتها.</li>
          <li>لمعالجة المعاملات والمدفوعات.</li>
          <li>لتحسين الموقع وتجربة المستخدم.</li>
          <li>للتواصل معكم (التحديثات، الدعم، العروض).</li>
          <li>للالتزام بالمتطلبات القانونية.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. ملفات الكوكيز والتتبع</h2>
        <p>
          نستخدم ملفات الكوكيز وتقنيات تتبع مشابهة لتحسين تجربة التصفح وتحليل
          حركة المرور وفهم سلوك المستخدم. يمكنكم تعطيل الكوكيز من إعدادات
          المتصفح.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. مشاركة البيانات</h2>
        <p>
          نحن لا نبيع بياناتكم الشخصية. قد نشارك معلوماتكم مع أطراف موثوقة مثل
          مزودي الدفع، استضافة الموقع، خدمات التحليلات، أو عند الطلب القانوني.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. أمان البيانات</h2>
        <p>
          نتخذ الإجراءات التقنية والتنظيمية المناسبة لحماية بياناتكم الشخصية من
          الوصول أو الكشف أو الاستخدام غير المصرح به.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. حقوقكم</h2>
        <p>
          حسب موقعكم، قد يكون لديكم الحق في الوصول إلى بياناتكم الشخصية،
          تصحيحها، تحديثها، أو طلب حذفها.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. روابط الأطراف الثالثة</h2>
        <p>
          قد يحتوي موقعنا على روابط لمواقع أخرى. نحن لسنا مسؤولين عن سياسات
          الخصوصية لتلك المواقع.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. التغييرات على السياسة</h2>
        <p>
          قد نقوم بتحديث سياسة الخصوصية من وقت لآخر. سيتم نشر أي تغييرات على هذه
          الصفحة مع تحديث تاريخ المراجعة.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">10. تواصل معنا</h2>
        <p>
          إذا كانت لديكم أي أسئلة حول سياسة الخصوصية، يرجى التواصل معنا على:
        </p>
        <p>البريد الإلكتروني: support@example.com</p>
      </section>
    </main>
  );
}
