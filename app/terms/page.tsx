export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-8">
      <h1 className="text-4xl font-bold">الشروط والأحكام</h1>

      <p className="text-low-color">
        آخر تحديث: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. مقدمة</h2>
        <p>
          هذه الشروط والأحكام تحدد القواعد التي تحكم استخدامكم لموقعنا وخدماتنا.
          باستخدام الموقع، فإنكم توافقون على الالتزام بهذه الشروط.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. استخدام الموقع</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>يجب استخدام الموقع للأغراض القانونية فقط.</li>
          <li>ممنوع نسخ أو نشر أو توزيع أي محتوى بدون إذن.</li>
          <li>ممنوع استخدام الموقع لإرسال رسائل مزعجة أو مضرة.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. الحسابات والمستخدمين</h2>
        <p>
          إذا قمتم بإنشاء حساب، فإنكم مسؤولون عن الحفاظ على سرية بيانات الحساب
          وكلمة المرور، وعن جميع الأنشطة التي تحدث باستخدام الحساب.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">4. الدفع والمشتريات</h2>
        <p>
          إذا كان الموقع يقدم منتجات أو خدمات مدفوعة، فإن جميع المدفوعات تتم
          وفقًا لطرق الدفع المتاحة. أي تأخير أو خطأ في الدفع يقع على المستخدم.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">5. المحتوى والمعلومات</h2>
        <p>
          نحن نبذل كل جهد لتقديم معلومات دقيقة، ولكن لا يمكننا ضمان خلو الموقع
          من الأخطاء أو المحتوى غير المحدث.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">6. إخلاء المسؤولية</h2>
        <p>
          الموقع وخدماته تُقدم كما هي دون أي ضمان صريح أو ضمني. نحن لا نتحمل أي
          مسؤولية عن أي أضرار ناتجة عن استخدام الموقع.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. التعديلات على الشروط</h2>
        <p>
          يمكننا تحديث هذه الشروط من وقت لآخر. سيتم نشر أي تغييرات على هذه
          الصفحة مع تحديث تاريخ المراجعة. استمراركم في استخدام الموقع بعد
          التغييرات يعني موافقتكم على الشروط الجديدة.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">8. القانون المطبق</h2>
        <p>
          تخضع هذه الشروط وتفسر وفقًا لقوانين الدولة التي يقع فيها نشاط الموقع،
          وأي نزاع سيتم حله ضمن الاختصاص القضائي لهذه الدولة.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">9. تواصل معنا</h2>
        <p>
          إذا كانت لديكم أي استفسارات حول هذه الشروط، يرجى التواصل معنا على:
        </p>
        <p>البريد الإلكتروني: support@example.com</p>
      </section>
    </main>
  );
}
